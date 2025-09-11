import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { DropDownMenu, MobileMenu, LinkBlock } from "@/components/organisms/header";
import { Logo, Load, ButtonGreenPadding, ButtonHoverColor, ButtonBasket } from "@/components";
import styleTools from "@/styles/styleTools";

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
const BottomhMenuStyled = styled.div`
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
  const [isCheckAuth, setCheckAuth] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: { Authorization: `Token ${token}` },
        };
        const [checkAuth] = await Promise.all([
          config.Token ? axios.get("http://127.0.0.1:8000/auth/users/me/", config) : Promise.resolve(null),
        ]);
        checkAuth ? (checkAuth.status === 200 ? setCheckAuth(true) : setCheckAuth(false)) : null;
      } catch (error) {
        console.log("error request: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <ContainerStyled>
      <HeaderStyled>
        <Logo />
        <NavStyled>
          <LinkBlock menu={isDataMenuTop} isAuthenticated={isCheckAuth} />
          {isCheckAuth ? <ButtonBasket /> : ""}
          <MobileMenu menu={isDataMenuTop} downMenu={isDataMenuDown} />
        </NavStyled>
      </HeaderStyled>
      <BottomhMenuStyled>
        <ButtonGreenPadding content="Служба доставки цветов" />
        <DropDownMenu menu={isDataMenuDown} />
        <ButtonHoverColor content={"Блог"} />
      </BottomhMenuStyled>
    </ContainerStyled>
  );
};
export default Header;
