import { Color } from "antd/es/color-picker";
import { useState } from "react";
import styled from "styled-components";

const SliderStyled = styled.div`
  height: 100%;
  position: relative;
`;
const SlideStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-image: url(${slides[currentIndex].img});
`;
const LeftArrowStyled = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;
const RightArrowStyled = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0);

  const goToPrevious = () => {};

  const goToNext = () => {};
  return (
    <SliderStyled>
      <LeftArrowStyled onClick={goToPrevious}>left</LeftArrowStyled>
      <RightArrowStyled onClick={goToNext}>right</RightArrowStyled>
      <SlideStyled />
    </SliderStyled>
  );
};

export default ImageSlider;
