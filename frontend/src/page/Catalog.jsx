import axios from "axios";
import { useEffect, useState } from "react";
import { useGetRequest } from "@/hooks";
import { CardCatalog, Container } from "@/components";
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
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/api/ProductCard/");
  const [isCategories, setCategories] = useState([]);
  const [isProducts, setProducts] = useState([]);
  const [isSelectCategory, setSelectedCategory] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Category")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    let url = "http://127.0.0.1:8000/api/ProductCard/";
    if (isSelectCategory) {
      url += `?category_id=${isSelectCategory}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [isSelectCategory]);

  console.log(isCategories, "<<<");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Container />
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
