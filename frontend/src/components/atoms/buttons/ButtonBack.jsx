import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ButtonBackStyled = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.div`
  color: ${styleTools.color.green};
  margin-left: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.6s ease;
  opacity: ${(props) => (props.$flag ? "0.7" : "100%")};
  border-bottom-color: black;
  &:hover {
    opacity: 0.7;
    border-bottom-color: ${styleTools.color.green};
  }
`;

const ButtonBack = ({ to, content }) => {
  return (
    <ButtonBackStyled to={to}>
      <MdArrowBackIosNew />
      <Button>{content}</Button>
    </ButtonBackStyled>
  );
};
export default ButtonBack;
