import styled from "styled-components";
import useGetRequest from "../customHooks/useGetRequest";
import CardCatalog from "../components/card/CardCatalog";
import styleTools from "../styles/styleTools";

const TableStyled = styled.div`
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
const Catalog = () => {
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/api/ProductCard/");
  console.log(data, "<<<");
  console.log(loading, "<<<");
  console.log(error, "<<<");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <TableStyled>
        {data &&
          data.map((value) => (
            <CardCatalog
              key={value.id}
              id={value.id}
              img={value.photos[0].image}
              title={value.name}
              button={"Добавить в корзину"}></CardCatalog>
          ))}
      </TableStyled>
    </>
  );
};
export default Catalog;
