import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "@/media/logo/logo.webp";

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: 60px;
  max-height: 60px;
`;

interface LogoImageProps {
  $imageUrl: string;
}

const LogoImage = styled.div<LogoImageProps>`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

const Logo: FC = () => {
  return (
    <NavLink to="/">
      <Container>
        <LogoImage $imageUrl={logoImage} />
      </Container>
    </NavLink>
  );
};

export default Logo;
