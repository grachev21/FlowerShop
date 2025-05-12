import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { LinkPadding, ImageTable, Price } from "@/components";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    navigate(`/ProductCard/${value.id}`);
  };
  return (
    <CardStyled>
      <ImageTable onClick={handleClick} image={value.photos[0].image} />
      <TitleStyled onClick={handleClick}>{value.name}...</TitleStyled>
      <Price content={value.price} />
      <LinkPadding content={"Добавить в корзину"} />
    </CardStyled>
  );
};
export default CardITBP;
