import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ImageTableStyled = styled.div<ImageTableStyledProps>`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$img});
  width: 100%;
  height: 380px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 80%;
    box-shadow: ${styleTools.shadow.boxShadow};
  }
  @media (min-width: ${styleTools.size.sm}) {
    height: 280px;
  }
  @media (min-width: ${styleTools.size.md}) {
    height: 200px;
  }
  @media (min-width: ${styleTools.size.lg}) {
    height: 250px;
  }
  @media (min-width: ${styleTools.size.xl}) {
    height: 320px;
  }
`;

const ImageTable: React.FC<ImageTableProps> = ({ image, onClick }) => {
  return <ImageTableStyled onClick={onClick} $img={image} />;
};
export default ImageTable;

interface ImageTableStyledProps {
  $img: string;
}
interface ImageTableProps {
  image: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  img: string;
}
