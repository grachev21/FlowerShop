import { useEffect, useState } from "react";
import useInterval from "use-interval";
import useWindowWidth from "../../../customHooks/useWindowWidth";
import styled from "styled-components";
import photo from "../../../media/img/102b1bd1cf54efd3bfed89e8558e9200.jpg";

const ContainerStyled = styled.div`
  height: 400px;
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
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$photo});
`;
const data = [
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
  { link: "", img: photo },
];


const AutoCarousel = () => {
  // Hook Usewindowwidth defines the screen size
  const isWidthWindow = useWindowWidth(); // We get the width of the window from the hook
  const [isNumberPhotos, setNumberPhoto] = useState(data.length); // The number of photos
  const [isBaseSize, setBaseSize] = useState(isWidthWindow * isNumberPhotos); // The total width of the canvas
  const [isPositionLeft, setPositionLeft] = useState(0); // The initial position of the photo

  useEffect(() => {
    setBaseSize(isWidthWindow * 8);
    setNumberPhoto(data.length);
    setBaseSize(isWidthWindow * isNumberPhotos);
    console.log("..");
  }, [isWidthWindow]);

  useInterval(() => {
    // We take one photo from the base canvas so as not to see an empty screen
    if (-isPositionLeft >= isBaseSize - isWidthWindow) {
      setPositionLeft(0);
    } else {
      setPositionLeft(isPositionLeft - isWidthWindow);
    }
  }, 3000);

  return (
    <ContainerStyled>
      <BoardPhotoStyled $multWi={isBaseSize} $position={isPositionLeft}>
        {data.map((value, index) => {
          return <PhotoStyled key={index} $photo={value.img} $wi={isWidthWindow} />;
        })}
      </BoardPhotoStyled>
    </ContainerStyled>
  );
};

export default AutoCarousel;
