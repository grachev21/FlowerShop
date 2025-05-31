import styled from "styled-components";
import { NavLink } from "react-router-dom";
import styleTools from "@/styles/styleTools";
import { useLogout } from "@/hooks";

const LinkBlockStyled = styled.div`
  display: none;
  flex-direction: row;
  @media (min-width: ${styleTools.size.lg}) {
    display: flex;
  }
`;
const LinkStyled = styled(NavLink)`
  height: 1.6rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-left: 20px;
  margin-right: 20px;
  color: ${styleTools.color.black};
  transition: all 0.3;
  margin-top: 8px;
  &:hover {
    transition: all 0.3s;
    color: ${styleTools.color.green};
  }
  &.active {
    color: ${styleTools.color.green};
    border-bottom: 1px solid ${styleTools.color.green};
  }
`;
const LogOutStyled = styled.div`
  cursor: pointer;
  height: 1.6rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 300;
  margin-left: 20px;
  margin-right: 20px;
  color: ${styleTools.color.black};
  transition: all 0.3;
  margin-top: 8px;
  &:hover {
    transition: all 0.3s;
    color: ${styleTools.color.green};
  }
`;

const LinkBlock = ({ menu, isAuthenticated }) => {
  const { logout } = useLogout();

  return (
    <LinkBlockStyled>
      <LinkStyled to={menu[0].link}>{menu[0].name}</LinkStyled>
      <LinkStyled to={menu[1].link}>{menu[1].name}</LinkStyled>
      <LinkStyled to={menu[2].link}>{menu[2].name}</LinkStyled>
      {isAuthenticated ? (
        <LogOutStyled onClick={logout}>Выйти</LogOutStyled>
      ) : (
        <LinkStyled to={menu[3].link}>{menu[3].name}</LinkStyled>
      )}
    </LinkBlockStyled>
  );
};
export default LinkBlock;
