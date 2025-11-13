import { BiRuble } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ product }) => {

  const navigate = useNavigate();

  const goLink = (id) => {
    navigate(`/productCard/${id}`);
  };
  return (
    <div className="stats shadow w-full">
      <div className="stat">
        {/* Product info */}
        <div className="stat-figure text-secondary">
          <div onClick={() => goLink(product.product)} className="avatar cursor-pointer">
            <div className="w-16 rounded-lg">
              <img src={product.photos[0].image} alt={product.product_name} />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="stat-value flex-col">{product.total_price}</div>
          <BiRuble className="text-xl" />
        </div>
        <div className="stat-desc text-secondary">Количество - {product.quantity}</div>
        <div className="stat-desc text-accent">Цена за штуку - {product.product_price}</div>
        <div className="stat-title">Название - {product.product_name}</div>
      </div>
    </div>
  );
};
export default ProductInfo;
