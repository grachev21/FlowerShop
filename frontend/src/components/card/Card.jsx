import styled from "styled-components";
import LinkPadding from "../links/linkPadding";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 22vw;
  height: 42vh;
`;
const ImgStyled = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$img});
  margin: 20px;
`;
const TitleStyled = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 300;
`;

const Card = ({ img, title, button }) => {
  return (
    <CardStyled>
      <ImgStyled $img={img}></ImgStyled>
      <TitleStyled>{title}</TitleStyled>
      <LinkPadding content={"Нажми меня"} />
    </CardStyled>
  );
};
export default Card;
