import styled from "styled-components";
import { useState } from "react";
import styleTools from "@/styles/styleTools";
import { ButtonHoverColor } from "@/components";

const ShowMenuStyled = styled.div`
  position: absolute;
  width: 240px;
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
const DropDownMenu = ({ menu }) => {
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
    <main className="pb-5 relative px-5 cursor-pointer" onMouseEnter={() => showMenu(true)} onMouseLeave={() => showMenu(false)}>
      <ButtonHoverColor content={"Что мы делаем"} />
      <ShowMenuStyled $opacity={isOpacity} $cursor={isCursor}>
        {menu.map((value, index) => {
          return <ButtonHoverColor key={index} content={value.name} />;
        })}
      </ShowMenuStyled>
    </main>
  );
};
export default DropDownMenu;
