import { useGetIdRequest, useGetRequest } from "@/hooks";
import { CatalogList, ListLinks, Load } from "@/components";

const Catalog = () => {
  const dataCategory = useGetRequest("http://127.0.0.1:8000/api/Category/");
  const dataProduct = useGetIdRequest("http://127.0.0.1:8000/api/ProductCard/");

  if (dataProduct.loading) return <Load />;
  if (dataCategory.loading) return <Load />;

  return (
    <>
      <ListLinks dataCategory={dataCategory} dataProduct={dataProduct} />
      <ProductList data={dataProduct} />
    </>
  );
};
export default Catalog;
