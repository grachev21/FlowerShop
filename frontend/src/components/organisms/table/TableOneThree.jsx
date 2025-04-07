import styled from "styled-components";
import styleTools from "@/styles/styleTools";

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

const TableOneThree = ({ data, PropsComponent }) => {
  if (!PropsComponent) return null;

  return (
    <TableOneThreeStyled>
      {!data || !data.data
        ? null
        : data.data.map((value, index) => (
            <PropsComponent key={index} {...value} />
          ))}
    </TableOneThreeStyled>
  );
};

export default TableOneThree;
