import styled from "styled-components";
import { useState } from "react";
import styleTools from "../../../styles/styleTools";

const MenuStyled = styled.div`
  padding-bottom: 20px;
  position: relative;
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
`;
const LinkLargeStyled = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: ${styleTools.color.green};
  }
`;
const ShowMenuStyled = styled.div`
  position: absolute;
  width: 240px;
  height: 200px;
  top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s;
  opacity: ${(props) => props.$opacity}%;
  box-shadow: ${styleTools.shadow.shadowA};
  pointer-events: ${(props) => props.$cursor};
  padding: 20px;
  z-index: 50;
  background-color: ${styleTools.color.white};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    background-color: ${styleTools.color.green};
    height: 100%;
  }
`;
const DropDownMenu = ({ downMenu }) => {
  const [isOpacity, setOpacity] = useState(0);
  const [isCursor, setCursor] = useState("none");
  

  const showMenu = (props) => {
    props ? setOpacity(100) : setOpacity(0);
    if (props) {
      setOpacity(100);
      setCursor("all");
    } else {
      setOpacity(0);
      setCursor("none");
    }
  };
  return (
    <MenuStyled onMouseEnter={() => showMenu(true)} onMouseLeave={() => showMenu(false)}>
      Что мы делаем
      <ShowMenuStyled $opacity={isOpacity} $cursor={isCursor}>
        {downMenu.map((value, index) => {
          return <LinkLargeStyled key={index}>{value.name}</LinkLargeStyled>;
        })}
      </ShowMenuStyled>
    </MenuStyled>
  );
};
export default DropDownMenu;
