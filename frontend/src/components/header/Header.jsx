import styled from "styled-components";
import Logo from "../logo/Logo";
import styleTools from "../../styles/styleTools";
import LinkBlock from "./components/LinkBlock";
import Basket from "./components/Basket";
import DropDownMenu from "./components/DropDownMenu";
import MobileMenu from "./components/MobileMenu";
import { userVerification } from "../../utils/userVerification";
import { useEffect, useState } from "react";

const menu = [
  { link: "/", name: "главная" },
  { link: "/catalog", name: "каталог" },
  { link: "/gallery", name: "галерея" },
  { link: "/login", name: "войти" },
];
const downMenu = [
  { link: "delivery", name: "Служба доставки цветов" },
  { link: "floristics", name: "флористика" },
  { link: "floral_floristic", name: "траурная флористическая" },
  { link: "gallery", name: "галерея" },
  { link: "push", name: "блог " },
];
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderStyled = styled.div`
  max-width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
const GreenLinkStyled = styled.div`
  color: ${styleTools.color.white};
  background-color: ${styleTools.color.green};
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
  height: min-content;
`;
const LinkLargeStyled = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: ${styleTools.color.green};
  }
`;
const Header = () => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const chekAuth = async () => {
      const authStatus = await userVerification();
      setAuth(authStatus);
    };
    chekAuth();
  }, []);

  if (isAuth) {
    const login = menu.findIndex((m) => m.link === "/login");
    menu[login] = { ...menu[login], link: "/logout", name: "Выйти" };
  } else {
    const login = menu.findIndex((m) => m.link === "/logout");
    menu[login] = { ...menu[login], link: "/login", name: "Войти" };
  }

  return (
    <ContainerStyled>
      <HeaderStyled>
        <Logo />
        <NavStyled>
          <LinkBlock menu={menu} />
          <Basket />
          <MobileMenu menu={menu} downMenu={downMenu} />
        </NavStyled>
      </HeaderStyled>
      <BottomhMenuStyled>
        <GreenLinkStyled>Служба доставки цветов</GreenLinkStyled>
        <DropDownMenu downMenu={downMenu} />
        <LinkLargeStyled>Блог</LinkLargeStyled>
      </BottomhMenuStyled>
    </ContainerStyled>
  );
};
export default Header;
