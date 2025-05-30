import styled from "styled-components";
import { SeparatorLine, ButtonBack, MiniImageShadow, Dot } from "@/components";
import styleTools from "@/styles/styleTools";

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
const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputStyled = styled.input`
  width: 40px;
  height: 30px;
  border: 1px solid ${styleTools.color.grey};
  margin: 1rem;
`;
const Margin = styled.div`
  margin-right: 1rem;
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

      <FormStyled>
        <Margin>
          <Dot flag={"x"} />
        </Margin>
        <Dot flag={"+"} />
        <InputStyled type="text"></InputStyled>
        <Dot flag={"-"} />
      </FormStyled>

      <SeparatorLine />
      <SeparatorLine />
    </BasketStyled>
  );
};
export default Basket;
