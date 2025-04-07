import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { LinkPadding, ImageTable, TitleXL } from "@/components";

const LinkStyled = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;
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
const CardCategory = ({ image, slogan, name, price }) => {
  console.log(price, "price");
  return (
    <CardStyled>
      <ImageTable image={image} />
      <TitleXL content={slogan} />
      {/* {price != null ? (
        <PriceStyled>
          {price} <MdOutlineCurrencyRuble />
        </PriceStyled>
      ) : (
        "xxx"
      )} */}
      <LinkStyled>
        <LinkPadding content={name} />
      </LinkStyled>
    </CardStyled>
  );
};
export default CardCategory;
