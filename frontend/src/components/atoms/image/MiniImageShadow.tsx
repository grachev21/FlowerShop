import styled from "styled-components";
import { MouseEventHandler } from "react";

interface MiniImageShadowProps {
  active: boolean;
  onClick: MouseEventHandler<HTMLImageElement>;
  image: string;
}

const MiniImageShadowStyled = styled.img<{ $active: boolean }>`
  min-width: 40px;
  height: auto;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 5px 9px 0px rgba(0, 0, 0, ${(props) => (props.$active ? 0.8 : 0)});
`;

const MiniImageShadow: React.FC<MiniImageShadowProps> = ({ onClick, image, active }) => {
  return <MiniImageShadowStyled $active={active} onClick={onClick} src={image} />;
};

export default MiniImageShadow;
