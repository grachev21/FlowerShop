import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const CategoryStyled = styled.div`
    width: calc(50vw - 20px);
    height: calc(30vh + 10px);
    background-image: url(${()=>});
`;
const Category = ({image}) => {
  return <CategoryStyled $props={image}/>;
};
export default Category;
