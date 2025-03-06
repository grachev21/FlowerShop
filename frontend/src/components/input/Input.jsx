import styled from "styled-components";
import styleTools from "../../styles/styleTools";

const InputContainerStyled = styled.div`
  position: relative;
  height: 3rem;
`;

const PlaceholderStyled = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0%, -50%);
  color: ${styleTools.color.black};
`;
const InputStyled = styled.input`
  background-color: red;
  width: 100%;
  height: 100%;
`;

const Input = ({ placeholder }) => {
  const focus = () => {
    console.log("focus");
  };

  const blur = () => {
    console.log("blur");
  };

  return (
    <InputContainerStyled>
      <PlaceholderStyled>{placeholder}</PlaceholderStyled>
      <InputStyled onFocus={focus} onBlur={blur}></InputStyled>
    </InputContainerStyled>
  );
};
export default Input;
