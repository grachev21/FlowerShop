import { useEffect, useState } from "react";
import useInterval from "use-interval";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import styled from "styled-components";
import photo from "../../../media/img/102b1bd1cf54efd3bfed89e8558e9200.jpg";

// Стилизованные компоненты
const ContainerStyled = styled.div`
  height: 800px;
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
  width: ${(props) => props.$wi}px;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$photo});
`;

const AutoCarousel = ({ data }) => {
  const isWidthWindow = useWindowWidth(); // Ширина окна
  const [isBaseSize, setBaseSize] = useState(0); // Общая ширина canvas
  const [isPositionLeft, setPositionLeft] = useState(0); // Позиция карусели
  const dataSlice = data.slice(0, 4);

  // Количество фотографий
  const isNumberPhotos = dataSlice.length;

  // Обновляем базовый размер при изменении ширины окна
  useEffect(() => {
    if (isWidthWindow) {
      setBaseSize(isWidthWindow * isNumberPhotos);
    }
  }, [isWidthWindow, isNumberPhotos]);

  // Автоматическая прокрутка карусели
  useInterval(() => {
    if (-isPositionLeft >= isBaseSize - isWidthWindow) {
      setPositionLeft(0); // Сброс позиции, если дошли до конца
    } else {
      setPositionLeft(isPositionLeft - isWidthWindow); // Прокрутка на одну фотографию
    }
  }, 4000);

  return (
    <ContainerStyled>
      <BoardPhotoStyled $multWi={isBaseSize} $position={isPositionLeft}>
        {dataSlice.map((value, index) => (
          <PhotoStyled key={value.id} $photo={value.photos[0].image} $wi={isWidthWindow} />
        ))}
      </BoardPhotoStyled>
    </ContainerStyled>
  );
};

export default AutoCarousel;
