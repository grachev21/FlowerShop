import styled from "styled-components";
import Table from "../components/table/Table";
import useGetRequest from "../customHooks/useGetRequest";
import CardCatalog from "../components/card/CardCatalog";

const CatalogStyled = styled.div``;

const Catalog = () => {
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/api/ProductCard/");
  console.log(data, "<<<")
  console.log(loading, "<<<")
  console.log(error, "<<<")

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <CatalogStyled>
      <Table type={"CardCatalog"} data={data} />
    </CatalogStyled>
  );
};
export default Catalog;
