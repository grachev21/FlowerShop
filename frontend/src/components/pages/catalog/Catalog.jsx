import { useLocation } from "react-router-dom";
import { useGetIdRequest } from "@/hooks";
import { ProductList, ButtonSimple, Load } from "@/components";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ListLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
`;
const Catalog = () => {
  const location = useLocation();
  const id = location.state;
  const dataProduct = useGetIdRequest("http://127.0.0.1:8000/core/api/ProductCard/");

  const [isCategory, setCategory] = useState(null)
  const [isType, setType] = useState(null)
  const [isParam, setParam] = useState(null)
  const [isId, setId] = useState(null)
  const [isProduct, setProduct] = useState(null)

  useEffect(() => {
    if (id !== null) {
      dataProduct.setParamName("typeproduct");
      dataProduct.setCategory(id);
    } else {
      dataProduct.setParamName("category");
      dataProduct.setCategory(null);
    }
  }, [id]);

  // http://127.0.0.1:8000/core/api/ProductCard/?category_id=2
  useEffect(() => {
    const fetchData = async () => {
      try {

        const addUrl = isParam && isId ? `?${isParam}_id=${isId}` : ""
        console.log("http://127.0.0.1:8000/core/api/ProductCard/", addUrl)
        const [category, type, product] = await Promise.all([
          axios.get("http://127.0.0.1:8000/core/api/Category/"),
          axios.get("http://127.0.0.1:8000/core/api/TypeProduct/"),
          axios.get(`http://127.0.0.1:8000/core/api/ProductCard/${addUrl}`)
        ])
        setCategory(category.data);
        setType(type.data);
        setProduct(product.data)
      } catch (error) {
        console.log("error request:", error)
      }
    }
    fetchData()
  }, [isId, isParam])

  console.log(isParam && isId ? `?${isParam}_id=${isId}` : "xx")
  if (!isCategory || !isType) return <Load />
  if (dataProduct.loading) return <Load />;
  if (dataProduct.error) return <div>Error: {dataProduct.error}</div>;

  const dataRequest = (id, param) => {
    setId(id)
    setParam(param)
  }

  return (
    <>
      <ListLinksStyled>
        <ButtonSimple
          onClick={() => dataProduct.setCategory(null)}
          content={"Все"}
        />
        {/* Categories */}
        {isCategory.map((value) => {
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
        {isType.map((value) => {
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
      <ProductList data={isProduct} />
    </>
  );
};

// basket
export default Catalog;
