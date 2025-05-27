import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGetRequest } from "@/hooks";
import { Load } from "@/components";

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

  const dataLogo = useGetRequest("http://127.0.0.1:8000/assets/api/Logo/")
  if (dataLogo.loading) return <Load />

  return (
    <NavLink to={"/"}>
      <ContainerStyled>
        <LogoStyled $logo={dataLogo.data[0].image} />
      </ContainerStyled>
    </NavLink>
  );
};
export default Logo;
