import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { DropDownMenu, MobileMenu, LinkBlock } from "@/components/organisms/header";
import { Logo, ButtonGreenPadding, ButtonHoverColor, ButtonBasket } from "@/components";
import { useAuthCheck } from "@/hooks";
import styleTools from "@/styles/styleTools";
import menu from "@/assets/menu";

const ContainerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${styleTools.color.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 50;
`;
const HeaderStyled = styled.div`
  max-width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const NavStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BottomMenuStyled = styled.div`
  width: 100%;
  display: none;
  flex-direction: row;
  text-transform: uppercase;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${styleTools.color.black};
  @media (min-width: ${styleTools.size.lg}) {
    display: flex;
  }
`;

const Header = () => {
  const { isAuthenticated, loading, error } = useAuthCheck();
  return (
    <ContainerStyled>
      <HeaderStyled>
        <Logo />
        <NavStyled>
          <LinkBlock menu={menu} isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <ButtonBasket /> : ""}
          <MobileMenu menu={menu} />
        </NavStyled>
      </HeaderStyled>
      <BottomMenuStyled>
        <ButtonGreenPadding content="Служба доставки цветов" />
        {/* <DropDownMenu menu={isDataMenuDown} /> */}
        <ButtonHoverColor content={"Блог"} />
      </BottomMenuStyled>
    </ContainerStyled>
  );
};
export default Header;
