import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const LinkSimpleStyled = styled.div`
  color: ${styleTools.color.green};
  margin-left: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.6s ease;
  &:hover {
    opacity: 0.7;
    border-bottom-color: ${styleTools.color.green};
  }
`;

const LinkSimple = ({ content, onClick }) => {
  return <LinkSimpleStyled onClick={onClick}>{content}</LinkSimpleStyled>;
};
export default LinkSimple;
