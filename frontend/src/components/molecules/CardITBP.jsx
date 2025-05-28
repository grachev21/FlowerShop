import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { ButtonPadding, ImageTable, Price } from "@/components";
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
  const authCheck = useAuthCheck()

  console.log(authCheck.isAuthenticated, "user")
  const imageHandleClick = () => {
    navigate(`/productCard/${value.id}`);
  };

  const buttonHandle = () => {
    authCheck.isAuthenticated ? "" : ""
  }

  return (
    <CardStyled>
      <ImageTable onClick={imageHandleClick} image={value.photos[0].image} />
      <TitleStyled onClick={imageHandleClick}>{value.name}...</TitleStyled>
      <Price content={value.price} />
      <ButtonPadding onClick={authCheck.isAuthenticated ? buttonHandle : imageHandleClick} content={authCheck.isAuthenticated ? "Добавить в корзину" : "Посмотреть"} />
    </CardStyled>
  );
};
export default CardITBP;
