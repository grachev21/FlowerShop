import styled from "styled-components";
import Table from "../components/table/Table";
import useGetRequest from "../customHooks/useGetRequest";

const CatalogStyled = styled.div``;

const Catalog = () => {
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/api/ProductCard/");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <CatalogStyled>
      <Table data={data} />
    </CatalogStyled>
  );
};
export default Catalog;
