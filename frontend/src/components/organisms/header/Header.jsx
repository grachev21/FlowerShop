import styled from "styled-components";
import { useAuthCheck, useGetRequest } from "@/hooks";
import { Basket, DropDownMenu, MobileMenu, LinkBlock } from "@/components/organisms/header";
import { Logo, Load } from "@/components";
import styleTools from "@/styles/styleTools";

// const dataType = useGetRequest("http://127.0.0.1:8000/assets/api/MenuTop/");

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
  const { isAuthenticated, loading, error } = useAuthCheck();

  const dataMenuTop = useGetRequest("http://127.0.0.1:8000/assets/api/MenuTop/");

  if (dataMenuTop.loading) return <Load />;
  console.log(dataMenuTop.data)
  // if (dataMenuTop.loading) return <div>Загрузка...</div>;
  // if (dataMenuTop.error) return <div>Ошибка: {dataCarousel.error.message}</div>;

  return (
    <ContainerStyled>
      <HeaderStyled>
        <Logo />
        <NavStyled>
          <LinkBlock menu={dataMenuTop} isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <Basket /> : ""}
          <MobileMenu menu={dataMenuTop} downMenu={downMenu} />
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
