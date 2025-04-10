import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const LinkSimpleStyled = styled.div`
  color: ${styleTools.color.green};
  margin-left: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.6s ease;
  opacity: ${(props) => (props.$flag ? "0.7" : "100%")};
  border-bottom-color: ${(props) =>
    props.$flag ? styleTools.color.green : styleTools.color.white};
  &:hover {
    opacity: 0.7;
    border-bottom-color: ${styleTools.color.green};
  }
`;

const LinkSimple = ({ content, onClick, flag }) => {
  console.log(flag);
  return (
    <LinkSimpleStyled $flag={flag} onClick={onClick}>
      {content}
    </LinkSimpleStyled>
  );
};
export default LinkSimple;
