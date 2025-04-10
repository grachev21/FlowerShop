import { TableOneThree, CardCatalog } from "@/components";

const GalleryType = ({ data }) => {
  return (
    <TableOneThree>
      {data.data.map((value) => (
        <CardCatalog key={value.id} value={value} />
      ))}
    </TableOneThree>
  );
};
export default GalleryType;
