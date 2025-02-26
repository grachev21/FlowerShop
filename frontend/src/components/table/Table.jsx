import styled from "styled-components";
import styleTools from "../../styles/styleTools";
import Card from "../card/Card";

import photo from "../../media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  grid-gap: 1rem; 
  margin: 2rem;
  @media (min-width: ${styleTools.size.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 2rem; 
    width: 100%;
  }
  @media (min-width: ${styleTools.size.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 3rem; 
    width: 100%;
  }
`;
const Table = () => {
  return (
    <TableStyled>
      <Card img={photo} title={"Что то полезное"} button={"Нажми меня"}></Card>
      <Card img={photo} title={"Что то полезное"} button={"Нажми меня"}></Card>
      <Card img={photo} title={"Что то полезное"} button={"Нажми меня"}></Card>
    </TableStyled>
  );
};
export default Table;
