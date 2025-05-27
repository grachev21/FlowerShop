import { FramesOneThree, CardITBP } from "@/components";

const ProductList = ({ data }) => {
  return (
    <FramesOneThree>
      {data.data.map((value, index) => (
        <CardITBP key={index} value={value} />
      ))}
    </FramesOneThree>
  );
};
export default ProductList;
