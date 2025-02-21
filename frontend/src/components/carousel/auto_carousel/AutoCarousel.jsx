import { useEffect, useState } from "react";
import useInterval from "use-interval";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import styled from "styled-components";
import photo from "../../../media/img/102b1bd1cf54efd3bfed89e8558e9200.jpg";

const ContainerStyled = styled.div`
  height: 400px;
  position: relative;
  overflow: hidden;
`;
const BoardPhotoStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  background-color: yellow;
  width: ${(props) => props.$multWi}px;
  height: 100%;
  transition: all 0.3s;
  left: ${(props) => props.$position}px;
`;

const PhotoStyled = styled.div`
  width: ${(props) => props.$wi}px;
  height: 400px;
  border: 4px solid blue;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$photo});
`;

const AutoCarousel = () => {
  const widthWindow = useWindowWidth();
  const [isBaseSize, setBaseSize] = useState(widthWindow * 8);
  const [isPositionLeft, setPositionLeft] = useState(0);

  useInterval(() => {
    if (-isPositionLeft >= isBaseSize *2 ) {
      setPositionLeft(0)
    } else {
      setPositionLeft(isPositionLeft - widthWindow );
    }
  }, 1000);

  console.log(isPositionLeft);

  return (
    <ContainerStyled>
      <BoardPhotoStyled $multWi={isBaseSize} $position={isPositionLeft}>
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
        <PhotoStyled $photo={photo} $wi={widthWindow} />
      </BoardPhotoStyled>
    </ContainerStyled>
  );
};

export default AutoCarousel;
