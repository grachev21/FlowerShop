import styled from "styled-components";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const ButtonBasketStyled = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: min-content;
`;
const NumberStyled = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
`;
const ButtonBasket = () => {
  return (
    <ButtonBasketStyled to={"/Basket"}>
      <SlBasket size={22} />
      <NumberStyled>0</NumberStyled>
    </ButtonBasketStyled>
  );
};
export default ButtonBasket;
