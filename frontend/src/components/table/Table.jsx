import styled from "styled-components";
import styleTools from "../../styles/styleTools";
import Card from "../card/Card";

import photo from "../../media/img/46deb9ec9a0baaf5972b03c82fe968f4.jpg";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Три колонки одинаковой ширины */
  grid-gap: 2rem; /* Промежуток между элементами */
  @media (min-width: ${styleTools.size.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 2rem; /* Промежуток между элементами */
  }
  @media (min-width: ${styleTools.size.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 3rem; /* Промежуток между элементами */
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
