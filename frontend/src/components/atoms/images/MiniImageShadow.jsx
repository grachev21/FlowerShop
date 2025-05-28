import styled from "styled-components";
const MiniImageShadowStyled = styled.img`
  min-width: 60px;
  height: auto;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0px 5px 9px 0px
    rgba(0, 0, 0, ${(props) => (props.$active ? 0.8 : 0)});
`;
const MiniImageShadow = ({ onClick, image, active }) => {
    return (
        <MiniImageShadowStyled $active={active} onClick={onClick} src={image} />
    );
}
export default MiniImageShadow;