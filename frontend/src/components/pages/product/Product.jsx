import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetRequest, useAuthCheck } from "@/hooks";
import { Load, Price, MiniImageShadow, Paragraph, ButtonPadding, ButtonBack } from "@/components";

const Product = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const dataProduct = useGetRequest(`http://localhost:8000/core/api/ProductCard/${id}/`);
  const authCheck = useAuthCheck();

  if (dataProduct.loading) return <Load />;

  return (
    <>
      <ButtonBack to={"/catalog"} content={"Каталог"} />

      <main className="mx-4 flex flex-col sm:flex-row">
        {/* Блок с изображениями */}
        <div className="mt-8 flex justify-between sm:w-3/5">
          {/* Список миниатюр */}
          <div className="w-10 mr-8">
            {dataProduct.data.photos.map((value, index) => (
              <MiniImageShadow
                key={index}
                image={value.image}
                onClick={() => setActiveIndex(index)}
                active={activeIndex === index}
              />
            ))}
          </div>

          {/* Основное изображение и описание */}
          <div className="w-full h-auto">
            <img src={dataProduct.data.photos[activeIndex].image} alt={dataProduct.data.name} className="w-full" />
            <Paragraph content={dataProduct.data.description} />
          </div>
        </div>

        {/* Блок с информацией о товаре */}
        <div className="ml-4 mt-4">
          <div className="font-bold text-2xl mt-4">{dataProduct.data.name}</div>
          <Price content={dataProduct.data.price} />
          {authCheck.isAuthenticated && <ButtonPadding content={"Добавить в корзину"} />}
        </div>
      </main>
    </>
  );
};

export default Product;
