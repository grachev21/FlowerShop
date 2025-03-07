import styled from "styled-components";
import styleTools from "../../styles/styleTools";

const ButtonStyled = styled.button`
  position: relative;
  color: ${styleTools.color.green};
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  border: 1px solid ${styleTools.color.green};
  text-transform: uppercase;
  font-size: large;
  font-weight: 400;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${styleTools.color.green};
    opacity: 0%;
    transition: all 0.3s;
  }
  &:hover::before {
    opacity: 15%;
  }
`;

const Button = ({ content, type }) => {
  return <ButtonStyled type={type}>{content}</ButtonStyled>;
};
export default Button;
