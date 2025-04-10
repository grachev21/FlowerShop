import { TableOneThree } from "@/components";

const CatalogList = ({ data }) => {
  return (
    <TableOneThree>
      {data.data.map((value, index) => (
        <CardCatalog key={index} value={value} />
      ))}
    </TableOneThree>
  );
};
export default CatalogList;
