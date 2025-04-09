import styled from "styled-components";
import { LinkSimple, Load } from "@/components";

const ListLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
`;

const ListLinks = ({ dataCategory, dataProduct }) => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <ListLinksStyled>
      <LinkSimple
        onClick={() => dataProduct.setCategory(null)}
        content={"Все"}
      />
      {dataCategory.data.map((value) => {
        return (
          <LinkSimple
            key={value.id}
            onClick={() => dataProduct.setCategory(value.id)}
            content={value.name}
          />
        );
      })}
    </ListLinksStyled>
  );
};
export default ListLinks;
