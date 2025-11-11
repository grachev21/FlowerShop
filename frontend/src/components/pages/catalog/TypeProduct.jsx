import { ButtonSimple, Load } from "@/components";
import { useGetRequest } from "@/hooks";

const TypeProduct = ({ isActiveType, changeTypeProduct }) => {
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/core/api/TypeProduct/");

  if (loading) return <Load />;

  return (
    <>
      {data.map((value, index) => {
        return (
          <ButtonSimple
            key={index}
            onClick={() => {
              changeTypeProduct(value.id);
            }}
            content={value.name}
            flag={isActiveType == value.id ? true : false}
          />
        );
      })}
    </>
  );
};
export default TypeProduct;
