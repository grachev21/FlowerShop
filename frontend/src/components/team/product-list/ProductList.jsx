import { TableOneThree, CardITBP } from "@/components";

const ProductList = ({ data }) => {
  return (
    <TableOneThree>
      {data.data.map((value, index) => (
        <CardITBP key={index} value={value} />
      ))}
    </TableOneThree>
  );
};
export default ProductList;
