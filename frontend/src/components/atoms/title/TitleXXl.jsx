import styled from "styled-components";

const TitleXXLStyled = styled.div`
  font-size: xx-large;
  font-weight: 400;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const TitleXXL = ({ content }) => {
  return <TitleXXLStyled>{content}</TitleXXLStyled>;
};
export default TitleXXL;
