import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const DotStyled = styled.div`
  width: 22px;
  height: 22px;
  position: relative;
  border-radius: 50%;
  color: white;
  background-color: ${styleTools.color.green};
  cursor: pointer;
  transition: all.3s;
  &:hover {
    opacity: 70%;
  }
  ${(props) =>
    props.$transform &&
    `
  transform: rotate(45deg);
  `}
`;

const HorizontalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 4px;
  background-color: ${styleTools.color.white};
`;

const VerticalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 60%;
  background-color: ${styleTools.color.white};
`;

const Dot = ({ flag, onClick }) => {
  let content;

  switch (flag) {
    case "-":
      content = (
        <DotStyled onClick={onClick}>
          <HorizontalStyled />
        </DotStyled>
      );
      break;

    case "+":
      content = (
        <DotStyled onClick={onClick}>
          <HorizontalStyled />
          <VerticalStyled />
        </DotStyled>
      );
      break;

    case "x":
      content = (
        <DotStyled onClick={onClick} $transform>
          <HorizontalStyled />
          <VerticalStyled />
        </DotStyled>
      );
      break;

    default:
      content = (
        <DotStyled onClick={onClick}>
          <HorizontalStyled />
        </DotStyled>
      );
      break;
  }
  return content;
};
export default Dot;
