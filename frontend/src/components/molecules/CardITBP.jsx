import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { ButtonPadding, ButtonAddBasket, ImageTable, Price } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "@/hooks";
import { MdOutlineCurrencyRuble } from "react-icons/md";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: ${styleTools.size.sm}) {
    width: 100%;
  }
`;
const TitleStyled = styled.div`
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Количество строк */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
`;

const CardITBP = ({ value }) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useAuthCheck();

  const imageHandleClick = () => {
    navigate(`/productCard/${value.id}`);
  };

  return (
      <main className="card w-96 bg-base-100 shadow-xl">
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
