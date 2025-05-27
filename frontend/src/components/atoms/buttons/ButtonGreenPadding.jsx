import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ButtonGreenPaddingStyled = styled.div`
  color: ${styleTools.color.white};
  background-color: ${styleTools.color.green};
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
  height: min-content;
`

const ButtonGreenPadding = ({ content }) => {
  return (
    <ButtonGreenPaddingStyled>{content}</ButtonGreenPaddingStyled>
  )
};
export default ButtonGreenPadding;
