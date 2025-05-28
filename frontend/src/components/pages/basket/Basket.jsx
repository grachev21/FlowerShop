import styled from "styled-components";
import { SeparatorLine, ButtonBack, MiniImageShadow, Dot } from "@/components";

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  width: 100%;
`;

const TitleStyled = styled.div`
  font-weight: 400;
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Basket = () => {
  return (
    <BasketStyled>
      <TopBlockStyled>
        <ButtonBack content={"Назад"} />
        <TitleStyled>Корзина</TitleStyled>
      </TopBlockStyled>
      <MiniImageShadow />
      <SeparatorLine />

      <Dot flag={"x"} />
      <Dot flag={"-"} />
      <Dot flag={"+"} />
      <SeparatorLine />
      <SeparatorLine />
    </BasketStyled>
  );
};
export default Basket;
