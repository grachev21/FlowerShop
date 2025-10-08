import { ButtonPadding, ButtonAddBasket } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "@/hooks";
import { MdOutlineCurrencyRuble } from "react-icons/md";


const CardITBP = ({ value }) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useAuthCheck();

  const imageHandleClick = () => {
    navigate(`/productCard/${value.id}`);
  };

  return (
      <main className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img onClick={imageHandleClick} src={value.photos[0].image} alt="Shoes" className="rounded-xl cursor-pointer" />
        </figure>
        <div className="card-body items-center text-center">
          <span className="flex flex-row items-center">
            <h2 className="card-title">{value.price}</h2>
            <MdOutlineCurrencyRuble size={18} />
          </span>
          <p>{value.name}</p>
          <div className="card-actions w-full">
            {isAuthenticated ? (
              <ButtonAddBasket productId={value.id} />
            ) : (
              <ButtonPadding onClick={imageHandleClick} content={"Посмотреть"} />
            )}
          </div>
        </div>
      </main>
  );
};
export default CardITBP;
