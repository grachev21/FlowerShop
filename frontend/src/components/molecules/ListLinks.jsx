import styled from "styled-components";
import { ButtonSimple } from "@/components";

const ListLinksStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
`;
const ListLinks = ({ type, flagContent, dataProduct }) => {
  return (
    <ListLinksStyled>
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
    </ListLinksStyled>
  );
};
export default ListLinks;
