import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { ButtonPadding, ButtonAddBasket, ImageTable, Price } from "@/components";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "@/hooks";


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
    <CardStyled>
      <ImageTable onClick={imageHandleClick} image={value.photos[0].image} />
      <TitleStyled onClick={imageHandleClick}>{value.name}...</TitleStyled>
      <Price content={value.price} />
      {isAuthenticated ? (
        <ButtonAddBasket productId={value.id} />
      ) : (
        <ButtonPadding onClick={imageHandleClick} content={"Посмотреть"} />
      )}
    </CardStyled>
  );
};
export default CardITBP;
