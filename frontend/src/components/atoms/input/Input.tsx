import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import styleTools from "@/styles/styleTools";

const InputContainerStyled = styled.div<InputContainerStyledProps>`
  position: relative;
  height: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  &::before {
    content: "";
    position: absolute;
    background-color: ${styleTools.color.black};
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: ${styleTools.color.green};
    bottom: -1px;
    left: 0;
    height: 3px;
    width: ${(props) => props.$sizeLine}%;
    transition: all 1s;
  }
`;

const PlaceholderStyled = styled.div<PlaceholderStyledProps>`
  position: absolute;
  left: 0px;
  top: -4px;
  transition: all 0.3s;
  color: ${(props) => props.$colorText};
  font-size: ${(props) => props.$sizeText}rem;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  font-weight: 300;
`;

const Input: React.FC<InputProps> = ({ placeholder, type, value, onDataSend }) => {
  const [isPlaceholder, setPlaceholder] = useState<number>(1.2);
  const [isColorPlaceholder, setColorPlaceholder] = useState<string>(styleTools.color.black);
  const [isLength, setLength] = useState<boolean>(false);
  const [isLine, setLine] = useState<number>(0);

  const focus = (): void => {
    setPlaceholder(0.9);
    setColorPlaceholder(styleTools.color.green);
    setLine(100);
  };

  const blur = (): void => {
    if (isLength) {
      setColorPlaceholder(styleTools.color.black);
      setLine(0);
    } else {
      setPlaceholder(1.2);
      setColorPlaceholder(styleTools.color.black);
      setLine(0);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onDataSend(e.target.value);
    setLength(e.target.value.length > 0);
  };

  return (
    <InputContainerStyled $sizeLine={isLine}>
      <PlaceholderStyled $sizeText={isPlaceholder} $colorText={isColorPlaceholder}>
        {placeholder}
      </PlaceholderStyled>
      <InputStyled onFocus={focus} onBlur={blur} onChange={handleInputChange} type={type} value={value} />
    </InputContainerStyled>
  );
};

export default Input;

interface InputContainerStyledProps {
  $sizeLine: number;
}

interface PlaceholderStyledProps {
  $colorText: string;
  $sizeText: number;
}

interface InputProps {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onDataSend: (value: string) => void;
}
