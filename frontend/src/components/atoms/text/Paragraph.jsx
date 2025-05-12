import styled from "styled-components";

const ParagraphStyled = styled.div`
  font-size: small;
  width: 100%;
  margin-top: 1rem;
`;

const Paragraph = ({ content }) => {
    return (
        <ParagraphStyled>{content}</ParagraphStyled>
    );
}
export default Paragraph;