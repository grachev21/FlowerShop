import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { LinkPadding, ImageTable, TitleXL } from "@/components";

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
const ImgStyled = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin: 20px;
  cursor: pointer;
`;
const TitleStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 300;
`;

const CardCategory = ({ image, slogan, name }) => {
  return (
    <CardStyled>
      <ImageTable image={image} />
      <TitleXL content={slogan} />
      <LinkPadding content={name} />
    </CardStyled>
  );
};
export default CardCategory;
