import styled from "styled-components";
const PhotoGalleryStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  max-width: 1440px;
`;

const TitleStyled = styled.div``;
const PhotoGallery = () => {
  return <PhotoGalleryStyled></PhotoGalleryStyled>;
};
export default PhotoGallery;
