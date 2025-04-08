import { useGetRequest } from "@/hooks";
import { Container, TableOneThree, CardImgTitBtnPrc } from "@/components";
import styled from "styled-components";
import styleTools from "@/styles/styleTools";

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
  const dataProduct = useGetRequest("http://127.0.0.1:8000/api/ProductCard/");

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  console.log(dataProduct);
  return (
    <>
      <Container />
      <TableOneThree data={dataProduct} page={"catalog"} />
    </>
  );
};
export default Catalog;
