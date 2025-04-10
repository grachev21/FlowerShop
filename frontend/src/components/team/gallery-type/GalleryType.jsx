import { TableOneThree, CardITB} from "@/components";

const GalleryType = ({ data }) => {
  return (
    <TableOneThree>
      {data.data.map((value) => (
        <CardITB key={value.id} value={value} />
      ))}
    </TableOneThree>
  );
};
export default GalleryType;
