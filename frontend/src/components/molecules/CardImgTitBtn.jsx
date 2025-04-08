import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { LinkPadding, ImageTable, TitleXL } from "@/components";
import { MdOutlineCurrencyRuble } from "react-icons/md";

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
const PriceStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
  margin: 1rem;
`;
const CardImgTitBtn = ({ value }) => {
  return (
    <CardStyled>
      <ImageTable image={value.image} />
      <TitleXL content={value.slogan} />
      <PriceStyled>
        {value.price} <MdOutlineCurrencyRuble />
      </PriceStyled>
      <LinkStyled>
        <LinkPadding content={value.name} />
      </LinkStyled>
    </CardStyled>
  );
};
export default CardImgTitBtn;
