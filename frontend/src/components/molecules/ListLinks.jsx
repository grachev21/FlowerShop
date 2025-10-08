import { ButtonSimple } from "@/components";

const ListLinks = ({ type, flagContent, dataProduct }) => {
  return (
    <div className="flex flex-row h-8">
      <ButtonSimple
        onClick={() => dataProduct.setCategory(null)}
        content={"Все"}
      />
      {type.data.map((value) => {
        return (
          <ButtonSimple
            key={value.id}
            onClick={() => dataProduct.setCategory(value.id)}
            content={value.name}
            flag={dataProduct.category === value.id ? true : false}
          />
        );
      })}
    </div>
  );
};
export default ListLinks;
