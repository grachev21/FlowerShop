import logo from "@/media/logo/logo.webp";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Load } from "@/components";
import { useEffect, useState } from "react";
import axios from "axios";

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
  max-width: 60px;
  max-height: 60px;
`;
const LogoStyled = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.$logo});
  background-size: cover;
  background-position: center;
`;

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <ContainerStyled>
        <LogoStyled $logo={logo} />
      </ContainerStyled>
    </NavLink>
  );
};
export default Logo;
