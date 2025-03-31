import { useEffect, useState } from "react";
import styled from "styled-components";

const DotStyledContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
`;
const DotStyled = styled.div`
  width: 8px;
  margin: 8px;
  height: 8px;
  display: flex;
  bottom: -20px;
  transform: translate(-50%);
  cursor: pointer;
  background-color: var(--hover-color-1);
  border-radius: 50%;
`;

const Dot = ({ number, onChange }) => {
  const [isDot, setDot] = useState(0);
  const dots = [...Array(number).keys()];
  const handleChange = (event, getIndex) => {
    onChange((event.target.value = getIndex));
  };

  useEffect(() => {
    const dots = [...document.querySelectorAll("." + styles.dot)];
    dots.map((dots, index) => {
      index === isDot ? dots.setAttribute("style", "background-color: var(--button-color-1)") : dots.removeAttribute("style");
    });
  });

  return (
    <DotStyledContainer>
      {dots.map((dots, index) => {
        return (
          <DotStyled
            key={index}
            onClick={(event) => {
              handleChange(event, index);
              setDot(index);
            }}
            style={{ background: "var()" }}></DotStyled>
        );
      })}
    </DotStyledContainer>
  );
};
export default Dot;
