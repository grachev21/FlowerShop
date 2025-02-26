import styled from "styled-components";
import styleTools from "../../styles/styleTools";

const LinkPaddingStyled = styled.div`
  position: relative;
  color: ${styleTools.color.green};
  padding-top: .8rem;
  padding-bottom: .6rem;
  border: 1px solid ${styleTools.color.green};
  text-transform: uppercase;
  font-size: large;
  font-weight: 400;
  width: 60%;
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
  }
  &:hover::before {
    opacity: 15%;
  }
`;
const LinkPadding = ({ content }) => {
  return <LinkPaddingStyled>{content}</LinkPaddingStyled>;
};
export default LinkPadding;
