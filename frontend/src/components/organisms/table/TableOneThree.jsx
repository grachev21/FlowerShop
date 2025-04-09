import styled from "styled-components";
import styleTools from "@/styles/styleTools";
import { CardCatalog, CardProduct } from "@/components";

const TableOneThreeStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 4rem;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 4rem;

  @media (min-width: ${styleTools.size.sm}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }

  @media (min-width: ${styleTools.size.md}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

const TableOneThree = ({ data, page }) => {
  if (data.loading) return <div>load</div>;

  if (page == "home")
    return (
      <TableOneThreeStyled>
        {data.data.map((value, index) => (
          <CardProduct key={index} value={value} />
        ))}
      </TableOneThreeStyled>
    );

  if (page == "catalog")
    return (
      <TableOneThreeStyled>
        {data.data.map((value, index) => (
          <CardCatalog key={index} value={value} />
        ))}
      </TableOneThreeStyled>
    );
};

export default TableOneThree;
