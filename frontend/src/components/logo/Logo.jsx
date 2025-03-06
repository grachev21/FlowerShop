import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../media/logo/logo.png";

const LogoStyled = styled.div`
  width: 300px;
  height: 54px;
  background-image: url(${logoImage});
  background-size: cover;
  background-position: center;
`;

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <LogoStyled />
    </NavLink>
  );
};
export default Logo;
