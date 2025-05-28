import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { TiMinus, TiPlus } from "react-icons/ti";
import { BiX } from "react-icons/bi";

const DotStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styleTools.color.green};
  width: 1.7rem;
  height: 1.7rem;
  position: relative;
  border-radius: 50%;
  color: white;
`;

const Dot = ({ flag }) => {
  let content;

  switch (flag) {
    case "x":
      content = <BiX size={22} />;
      break;

    case "-":
      content = <TiMinus size={44}/>;
      break;

    case "+":
      content = <TiPlus size={44} />;
      break;

    default:
      content = <BiX  size={44} />;
      break;
  }
  return <DotStyled>{content}</DotStyled>;
};
export default Dot;
