import styled from "styled-components";
import LinkPadding from "../links/linkPadding";
import styleTools from "../../styles/styleTools";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import { Link } from "react-router-dom";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 58vh;
  @media (min-width: ${styleTools.size.sm}) {
    width: 100%;
    height: 48vh;
  }
`;
const ImgStyled = styled(Link)`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$img});
  margin: 20px;
  cursor: pointer;
`;
const TitleStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 300;
`;
const PriceStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
  margin: 1rem;
`;

const CardCatalog = ({ id, img, title, price, button }) => {
  return (
    <CardStyled>
      <ImgStyled to={`/ProductCard/${id}`} $img={img}></ImgStyled>
      <TitleStyled>{title}</TitleStyled>
      <PriceStyled>
        {price} <MdOutlineCurrencyRuble />
      </PriceStyled>
      <LinkPadding content={button} />
    </CardStyled>
  );
};
export default CardCatalog;
