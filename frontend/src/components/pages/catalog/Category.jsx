import { ButtonSimple, Load } from "@/components";
import { useGetRequest } from "@/hooks";

const Category = ({ isActiveCategory, changeCategory }) => {
  const { data, loading, error } = useGetRequest("http://127.0.0.1:8000/core/api/Category/");

  if (loading) return <Load />;

  return (
    <>
      {data.map((value, index) => {
        return (
          <ButtonSimple
            key={index}
            onClick={() => {
              changeCategory(value.id);
            }}
            content={value.name}
            flag={isActiveCategory == value.id ? true : false}
          />
        );
      })}
    </>
  );
};
export default Category;
