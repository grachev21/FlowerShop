import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetRequest, useAuthCheck } from "@/hooks";
import { Load, Price, MiniImageShadow, Paragraph, ButtonPadding, ButtonBack } from "@/components";

const Product = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: product, loading } = useGetRequest(`http://localhost:8000/core/api/ProductCard/${id}/`);
  const { isAuthenticated } = useAuthCheck();

  if (loading) return <Load />;
  if (!product) return <div>Product not found</div>;

  const { photos, name, description, price } = product;

  return (
    <>
      <ButtonBack to="/catalog" content="Каталог" />

      <main className="mx-4 flex flex-col sm:flex-row">
        {/* Images block */}
        <div className="mt-8 flex justify-between sm:w-3/5">
          {/* Thumbnails list */}
          <div className="w-10 mr-8">
            {photos.map((photo, index) => (
              <MiniImageShadow
                key={photo.image} // Better key using unique identifier
                image={photo.image}
                onClick={() => setActiveIndex(index)}
                active={activeIndex === index}
              />
            ))}
          </div>

          {/* Main image and description */}
          <div className="w-full h-auto">
            <img
              src={photos[activeIndex].image}
              alt={name}
              className="w-full"
              loading="lazy" // Added lazy loading
            />
            <Paragraph content={description} />
          </div>
        </div>

        {/* Product info block */}
        <div className="ml-4 mt-4">
          <h1 className="font-bold text-2xl mt-4">{name}</h1> {/* Changed to semantic h1 */}
          <Price content={price} />
          {isAuthenticated && (
            <ButtonPadding
              content="Добавить в корзину"
              aria-label={`Add ${name} to cart`} // Added accessibility
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Product;
