import { useLocation } from "react-router-dom";
import { useGetIdRequest, useGetRequest } from "@/hooks";
import { ProductList, ListLinks, Load } from "@/components";
import { useEffect } from "react";

const Catalog = () => {
  const location = useLocation();
  const id = location.state;
  const dataCategory = useGetRequest("http://127.0.0.1:8000/api/Category/");
  const dataProduct = useGetIdRequest("http://127.0.0.1:8000/api/ProductCard/");

  useEffect(() => {
    if (id !== null) {
      dataProduct.setParamName("typeproduct");
      dataProduct.setCategory(id);
    } else {
      dataProduct.setParamName("category");
      dataProduct.setCategory(null);
    }
  }, [id]);

  if (dataProduct.loading || dataCategory.loading) return <Load />;
  if (dataProduct.error) return <div>Error: {dataProduct.error}</div>;
  if (dataCategory.error) return <div>Error: {dataCategory.error}</div>;

  return (
    <>
      <ListLinks dataCategory={dataCategory} dataProduct={dataProduct} />
      <ProductList data={dataProduct} />
    </>
  );
};

export default Catalog;
