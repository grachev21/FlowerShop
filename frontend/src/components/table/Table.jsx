import styled from "styled-components";
import styleTools from "../../styles/styleTools";
import Card from "../card/Card";

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 4rem;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: ${styleTools.size.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  @media (min-width: ${styleTools.size.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 100%;
  }
`;
const Table = ({ data }) => {
  return (
    <TableStyled>
      {data &&
        data.map((value) => (
          <Card
            key={value.id}
            id={value.id}
            img={value.photos[0].image}
            title={value.name}
            price={value.price}
            button={"Добавить в корзину"}></Card>
        ))}
    </TableStyled>
  );
};
export default Table;
