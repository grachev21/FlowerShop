import styled from "styled-components";
import logo from "../../media/logo/logo.png";
import styleTools from "../../styles/styleTools";
import LinkBlock from "./components/LinkBlock";
import Basket from "./components/Basket";
import DropDownMenu from "./components/DropDownMenu";
import MobileMenu from "./components/MobileMenu";

const menu = [
  { link: "/", name: "главная" },
  { link: "/frankfurt", name: "франквуртский" },
  { link: "/base", name: "центральный" },
  { link: "/jobs", name: "работа" },
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
const LogoStyled = styled.div`
  width: 300px;
  height: 54px;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
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
  return (
    <ContainerStyled>
      <HeaderStyled>
        <LogoStyled />
        <NavStyled>
          <LinkBlock menu={menu} />
          <Basket />
          <MobileMenu menu={menu} downMenu={downMenu} />
        </NavStyled>
      </HeaderStyled>
      <BottomhMenuStyled>
        <GreenLinkStyled>Служба доставки цветов</GreenLinkStyled>
        <DropDownMenu />
        <LinkLargeStyled>Блог</LinkLargeStyled>
      </BottomhMenuStyled>
    </ContainerStyled>
  );
};
export default Header;
