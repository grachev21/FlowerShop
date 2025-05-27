import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ButtonHoverColorStyled = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  transition: all 0.3s;
  cursor: pointer;
  color: ${styleTools.color.black};
  &:hover {
    color: ${styleTools.color.green};
  }
`;

const ButtonHoverColor = ({ content, }) => {
  return (<ButtonHoverColorStyled>{content}  </ButtonHoverColorStyled>)
}
export default ButtonHoverColor;
