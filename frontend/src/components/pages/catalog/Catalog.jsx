import { useLocation } from "react-router-dom";
import { useGetIdRequest, useGetRequest } from "@/hooks";
import { FramesOneThree, CardITBP, ButtonSimple, Load } from "@/components";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios";

const ListLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
`;
const Catalog = () => {
  // load the ID
  const location = useLocation();
  const [isTypeRequest, setTypeRequest] = useState("category");
  // Download categories
  const getRequest = useGetRequest("http://127.0.0.1:8000/core/api/ProductCard/");
  // Get a product by category
  const getIdRequest = useGetIdRequest(
    "http://127.0.0.1:8000/core/api/ProductCard/", // baseUrl
    isTypeRequest, // paramName
    null // initialCategory (опционально)
  );

  // receives ID data from the Home page
  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      setTypeRequest("typeproduct");
      getIdRequest.setCategory(location.state);
    }
  }, [location.state]); // Добавьте location.state в зависимости

  if (getIdRequest.loading) return <Load />;
  if (getRequest.loading) return <Load />;

  return (
    <>
      <ListLinksStyled>
        <ButtonSimple onClick={() => getIdRequest.setCategory(null, null)} content={"Все.."} />
        {/* Categories */}
        {getRequest.data.map((value) => {
          return (
            <ButtonSimple
              key={value.id}
              onClick={() => {
                getIdRequest.setCategory(value.category.id), setTypeRequest("category");
              }}
              content={value.category.name}
            />
          );
        })}
        {/* Types */}
        {getRequest.data.map((value) => {
          return (
            <ButtonSimple
              key={value.id}
              onClick={() => {
                getIdRequest.setCategory(value.typeproduct.id), setTypeRequest("typeproduct");
              }}
              content={value.typeproduct.name}
            />
          );
        })}
      </ListLinksStyled>
      <FramesOneThree>
        {getIdRequest.data.map((value, index) => (
          <CardITBP key={index} value={value} />
        ))}
      </FramesOneThree>
    </>
  );
};

// basket
export default Catalog;
