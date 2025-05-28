import styled from "styled-components";
import { useAuthCheck, useGetRequest } from "@/hooks";
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
  const dataAuthenticated = useAuthCheck();
  const dataMenuTop = useGetRequest("http://127.0.0.1:8000/assets/api/MenuTop/");
  const dataMenuDown = useGetRequest("http://127.0.0.1:8000/assets/api/MenuDown/");

  if (dataMenuTop.loading) return <Load />;
  if (dataMenuDown.loading) return <Load />;


  return (
    <ContainerStyled>
      <HeaderStyled>
        <Logo />
        <NavStyled>
          <LinkBlock menu={dataMenuTop} isAuthenticated={dataAuthenticated.isAuthenticated} />
          {dataAuthenticated.isAuthenticated ? <ButtonBasket /> : ""}
          <MobileMenu menu={dataMenuTop} downMenu={dataMenuDown} />
        </NavStyled>
      </HeaderStyled>
      <BottomhMenuStyled>
        <ButtonGreenPadding content="Служба доставки цветов" />
        <DropDownMenu menu={dataMenuDown} />
        <ButtonHoverColor content={"Блог"} />
      </BottomhMenuStyled>
    </ContainerStyled>
  );
};
export default Header;
