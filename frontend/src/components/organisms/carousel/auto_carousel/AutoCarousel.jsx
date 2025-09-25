import { useEffect, useState } from "react";
import useInterval from "use-interval";
import { useWindowWidth } from "@/hooks";
import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ContainerStyled = styled.div`
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
`;
const BoardPhotoStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: ${(props) => props.$multWi}px;
  height: 100%;
  transition: all 0.3s;
  left: ${(props) => props.$position}px;
`;
const PhotoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$wi}px;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$photo});
`;
const TitleStyled = styled.div`
  color: ${styleTools.color.white};
  font-size: 3.4rem;
  font-weight: bold;
  text-shadow: ${styleTools.shadow.shadoTitle};
`;

const AutoCarousel = ({ data }) => {
  const isWidthWindow = useWindowWidth(); // Ширина окна
  const [isBaseSize, setBaseSize] = useState(0); // Общая ширина canvas
  const [isPositionLeft, setPositionLeft] = useState(0); // Позиция карусели
  const dataSlice = data.slice(0, 4);

  // number of photos
  const isNumberPhotos = dataSlice.length;

  // Update the basic size when the window width changes
  useEffect(() => {
    if (isWidthWindow) {
      setBaseSize(isWidthWindow * isNumberPhotos);
    }
  }, [isWidthWindow, isNumberPhotos]);

  // Automatic scrolling of the carousel
  useInterval(() => {
    if (-isPositionLeft >= isBaseSize - isWidthWindow) {
      setPositionLeft(0); // resetting the position if reached the end
    } else {
      setPositionLeft(isPositionLeft - isWidthWindow); // scrolling per photographers
    }
  }, 4000);

  return (
    <ContainerStyled>
      <BoardPhotoStyled $multWi={isBaseSize} $position={isPositionLeft}>
        {dataSlice.map((value, index) => (
          <PhotoStyled key={index} $photo={value.img} $wi={isWidthWindow}>
            <TitleStyled>{value.title}</TitleStyled>
          </PhotoStyled>
        ))}
      </BoardPhotoStyled>
    </ContainerStyled>
  );
};

export default AutoCarousel;
