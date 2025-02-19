import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import styleTools from "../../../styles/styleTools";

const ContainerStyled = styled.div``;
const MenuIconStyled = styled.div`
  padding-left: 30px;
  margin-top: 4px;
  display: block;
  cursor: pointer;
  @media (min-width: ${styleTools.size.lg}) {
    display: none;
  }
`;
const SlidingBarStyled = styled.div`
  left: 0;
  top: 80px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${styleTools.color.green};
  overflow: hidden;
  width: 100%;
  transition: all 0.3s;
  transform: scaleY(${(props) => props.$scale});
  transform-origin: top;
  @media (min-width: ${styleTools.size.lg}) {
    display: none;
  }
`;
const LinkLargeStyled = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: ${styleTools.color.green};
  }
`;

const MobileMenu = () => {
  const [isScale, setScale] = useState(0);
  const [isLuck, setLuck] = useState(true);

  const menuShowHidden = () => {
    isScale === 0 ? setScale(1) : setScale(0);
    isLuck ? setLuck(false) : setLuck(true);
  };

  return (
    <ContainerStyled>
      <MenuIconStyled onClick={menuShowHidden}>{isLuck ? <FiMenu size={26} /> : <IoClose size={26} />}</MenuIconStyled>
      <SlidingBarStyled $scale={isScale}>
        <LinkLargeStyled>Link</LinkLargeStyled>
        <LinkLargeStyled>Link</LinkLargeStyled>
        <LinkLargeStyled>Link</LinkLargeStyled>
        <LinkLargeStyled>Link</LinkLargeStyled>
        <LinkLargeStyled>Link</LinkLargeStyled>
        <LinkLargeStyled>Link</LinkLargeStyled>
      </SlidingBarStyled>
    </ContainerStyled>
  );
};
export default MobileMenu;
