import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { CardButtonTitle } from "@/components";

const TableOneThreeStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 4rem;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 100px;
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

const TableOneThree = ({ data, index }) => {
  return (
    <TableOneThreeStyled>
      {data.data == null
        ? ""
        : data.data.map((value, index) => (
            <CardButtonTitle key={index} image={value.image} slogan={value.slogan} name={value.name} />
          ))}
    </TableOneThreeStyled>
  );
};
export default TableOneThree;
