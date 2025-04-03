import styled from "styled-components";
const TitleXLStyled = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 22px;
  font-display: swap;
  text-transform: none;
  text-align: center;
`;
const TitleXL = ({ content }) => {
  return <TitleXLStyled>{content}</TitleXLStyled>;
};
export default TitleXL;
