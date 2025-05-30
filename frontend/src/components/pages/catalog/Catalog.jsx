import { useLocation } from "react-router-dom";
import { useGetIdRequest, useGetRequest } from "@/hooks";
import { ProductList, ButtonSimple, Load } from "@/components";
import { useEffect } from "react";
import styled from "styled-components";

const ListLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
`;
const Catalog = () => {
  const location = useLocation();
  const id = location.state;
  const dataCategory = useGetRequest("http://127.0.0.1:8000/core/api/Category/");
  const dataTypeProduct = useGetRequest("http://127.0.0.1:8000/core/api/TypeProduct/")
  const dataProduct = useGetIdRequest("http://127.0.0.1:8000/core/api/ProductCard/");

  useEffect(() => {
    if (id !== null) {
      dataProduct.setParamName("typeproduct");
      dataProduct.setCategory(id);
    } else {
      dataProduct.setParamName("category");
      dataProduct.setCategory(null);
    }
  }, [id]);

  if (dataProduct.loading || dataCategory.loading || dataTypeProduct.loading) return <Load />;
  if (dataProduct.error) return <div>Error: {dataProduct.error}</div>;
  if (dataCategory.error) return <div>Error: {dataCategory.error}</div>;

  console.log(dataProduct.paramName, "<><>")
  const dataRequest = (value, flag) => {
    dataProduct.setParamName(flag);
    dataProduct.setCategory(value)
  }
  return (
    <>
      <ListLinksStyled>
        <ButtonSimple
          onClick={() => dataProduct.setCategory(null)}
          content={"Все"}
        />
        {/* Categories */}
        {dataCategory.data.map((value) => {
          return (
            <ButtonSimple
              key={value.id}
              onClick={() => dataRequest(value.id, "category")}
              content={value.name}
              flag={dataProduct.category === value.id && dataProduct.paramName === "category"}
            />
          );
        })}
        {/* Types */}
        {dataTypeProduct.data.map((value) => {
          return (
            <ButtonSimple
              key={value.id}
              onClick={() => dataRequest(value.id, "typeproduct")}
              content={value.name}
              flag={dataProduct.category === value.id && dataProduct.paramName === "typeproduct"}
            />
          );
        })}
      </ListLinksStyled>
      <ProductList data={dataProduct} />
    </>
  );
};

// basket
export default Catalog;
