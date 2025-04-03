import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ImageTableStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$image});
  width: 100%;
  height: 320px;
  @media (min-width: ${styleTools.size.sm}) {
    height: 300px;
  }
`;
const ImageTable = ({ image }) => {
  return <ImageTableStyled $image={image} />;
};
export default ImageTable;
