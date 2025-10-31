import styled from "styled-components";
import { SlBasket } from "react-icons/sl";

const BasketStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: min-content;
`;
const NumberStyled = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
`;
const Basket = () => {
  return (
    <BasketStyled>
      <SlBasket size={22} />
      <NumberStyled>0</NumberStyled>
    </BasketStyled>
  );
};
export default Basket;
