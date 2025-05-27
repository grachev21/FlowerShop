import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
const MenuIconStyled = styled.div`
  padding-left: 30px;
  display: flex;
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
  background-color: ${styleTools.color.swamp};
  overflow: hidden;
  width: 100%;
  transition: all 0.3s;
  transform: scaleY(${(props) => props.$scale});
  transform-origin: top;
  padding-top: 14px;
  padding-bottom: 14px;
  z-index: 50;
  @media (min-width: ${styleTools.size.lg}) {
    display: none;
  }
`;
const DownMenuStyled = styled(NavLink)`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;
  color: ${styleTools.color.black};
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: end;
`;
const LinkStyled = styled(NavLink)`
  height: 1.6rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-left: 20px;
  margin-right: 20px;
  color: ${styleTools.color.black};
  transition: all 0.3;
  margin-top: 8px;
  text-align: end;
  &:hover {
    transition: all 0.3s;
    color: ${styleTools.color.green};
  }
  &.active {
    color: ${styleTools.color.green};
    border-bottom: 1px solid ${styleTools.color.green};
  }
`;
const MobileMenu = ({ menu, downMenu }) => {
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
        {downMenu.data.map((value, index) => {
          return (
            <DownMenuStyled to={value.link} key={index} activeclassname="active">
              {value.name}
            </DownMenuStyled>
          );
        })}

        {menu.data.map((value, index) => {
          return (
            <LinkStyled to={value.link} key={index} activeclassname="active">
              {value.name}
            </LinkStyled>
          );
        })}
      </SlidingBarStyled>
    </ContainerStyled>
  );
};
export default MobileMenu;
