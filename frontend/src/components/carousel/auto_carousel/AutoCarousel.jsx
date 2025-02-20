import { useEffect, useState } from "react";
import styled from "styled-components";

import carouselList from "../../helpers/carouselList";
import Dot from "./Dot";

const CarouselStyled = styled.div`
  height: 220px;
  position: relative;
  overflow: hidden;
  background-color: var(--background-color-3);
  margin: 80px;
  width: ${(props) => props.$width}px;
`;
const LineStyled = styled.div`
  position: absolute;
  display: flex;
  left: ${(props) => props.$left}px;
  transition: 0.5s;
`;
const PictureStyled = styled.img`
  height: 180px;
  width: ${(props) => props.$width}px;
`;
const LinkCollectionsStyled = styled.dev`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Carousel = () => {
  const widthCarousel = 1080;
  const widthPicture = 360;
  const quantityPicture = Object.keys(carouselList).length;
  const numberPoints = quantityPicture - widthCarousel / widthPicture + 1;
  const listPoints = [];
  const [isPosition, setPosition] = useState(0);

  // Receives data from the child
  const [isIndex, setIndex] = useState(0);
  const handleChange = (isValue) => {
    setIndex(isValue);
  };

  for (let index = 0; index < numberPoints; index++) {
    listPoints.push(index * widthPicture);
  }

  useEffect(() => {
    setPosition(listPoints[isIndex]);
  });

  return (
    <CarouselStyled $width={widthCarousel}>
      <LineStyled $left={isPosition}>
        {carouselList.map((carouselList, index) => {
          return <PictureStyled key={index} $width={widthPicture} src={carouselList.img} alt="" />;
        })}
      </LineStyled>
      <Dot number={numberPoints} onChange={handleChange} />
    </CarouselStyled>
  );
};

export default Carousel;
