import { useLocation } from "react-router-dom";
import { useGetIdRequest, useGetRequest } from "@/hooks";
import { FramesOneThree, CardITBP, ButtonSimple, Load } from "@/components";
import { useEffect, useState } from "react";

const Catalog = () => {
  // for an active button
  const [isActiveCategory, setActiveCategory] = useState(false);
  const [isActiveType, setActiveType] = useState(false);
  // load the ID
  const location = useLocation();
  const [isTypeRequest, setTypeRequest] = useState("category");
  // Download categories
  const getRequest = useGetRequest("http://127.0.0.1:8000/core/api/ProductCard/");
  // Get a product by category
  const getIdRequest = useGetIdRequest(
    "http://127.0.0.1:8000/core/api/ProductCard/",
    isTypeRequest, // paramName
    null // initialCategory (опционально)
  );

  // receives ID data from the Home page
  useEffect(() => {
    if (location.state !== null && location.state !== undefined) {
      // sets the type of filtering
      setTypeRequest("typeproduct");
      // transfers ID to user hook useGetIdRequest
      getIdRequest.setCategory(location.state);
    }
  }, [location.state]); // Добавьте location.state в зависимости

  if (getIdRequest.loading) return <Load />;
  if (getRequest.loading) return <Load />;

  const handleClick = () => {};
  return (
    <>
      <main className="flex flex-row h-8">
        <ButtonSimple
          onClick={() => {
            getIdRequest.setCategory(null, null), setActiveCategory(false), setActiveType(false);
          }}
          content={"Все.."}
        />
        {/* Categories */}
        {getRequest.data.map((value, index) => {
          return (
            <ButtonSimple
              key={index}
              onClick={() => {
                getIdRequest.setCategory(value.category.id),
                  setTypeRequest("category"),
                  setActiveType(false),
                  setActiveCategory(value.category.id);
              }}
              content={value.category.name}
              flag={isActiveCategory == value.category.id ? true : false}
            />
          );
        })}
        {/* Types */}
        {getRequest.data.map((value, index) => {
          return (
            <ButtonSimple
              key={index}
              onClick={() => {
                getIdRequest.setCategory(value.typeproduct.id),
                  setTypeRequest("typeproduct"),
                  setActiveCategory(false),
                  setActiveType(value.typeproduct.id);
              }}
              content={value.typeproduct.name}
              flag={isActiveType == value.typeproduct.id ? true : false}
            />
          );
        })}
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
