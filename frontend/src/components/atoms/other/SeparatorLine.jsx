import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const SeparatorLineStyled = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: black;
  opacity: 20%;
`;

const SeparatorLine = () => {
  return <SeparatorLineStyled></SeparatorLineStyled>;
};

export default SeparatorLine;
