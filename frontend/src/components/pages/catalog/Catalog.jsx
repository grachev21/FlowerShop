import { useLocation } from "react-router-dom";
import { useGetIdRequest, useGetRequest } from "@/hooks";
import { FramesOneThree, CardITBP, ButtonSimple, Load } from "@/components";
import { useEffect, useState } from "react";
import Category from "./Category";
import TypeProduct from "./TypeProduct";

const Catalog = () => {
  // for an active button
  const [isActiveCategory, setActiveCategory] = useState(false);
  const [isActiveType, setActiveType] = useState(false);

  const location = useLocation();
  const [isTypeRequest, setTypeRequest] = useState("category");

  const getIdRequest = useGetIdRequest("http://127.0.0.1:8000/core/api/ProductCard/", isTypeRequest, null);

  const changeCategory = (id) => {
    getIdRequest.setCategory(id);
    setTypeRequest("category");
    setActiveType(false);
    setActiveCategory(id);
  };
  const changeTypeProduct = (id) => {
    getIdRequest.setCategory(id);
    setTypeRequest("type_product");
    setActiveCategory(false);
    setActiveType(id);
  };

  // receives ID data from the Home page
  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      // sets the type of filtering
      setTypeRequest("type_product");
      // transfers ID to user hook useGetIdRequest
      getIdRequest.setCategory(location.state);
    }
  }, [location.state]); // Добавьте location.state в зависимости

  if (getIdRequest.loading) return <Load />;

  return (
    <>
      <main className="flex flex-row h-8">
        <ButtonSimple
          onClick={() => {
            getIdRequest.setCategory(null, null), setActiveCategory(false), setActiveType(false);
          }}
          content={"Все.."}
        />
        <Category isActiveCategory={isActiveCategory} changeCategory={changeCategory} />
        <TypeProduct isActiveType={isActiveType} changeTypeProduct={changeTypeProduct} />
      </main>
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
