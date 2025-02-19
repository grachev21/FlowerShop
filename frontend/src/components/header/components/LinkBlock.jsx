import styled from "styled-components";
import styleTools from "../../../styles/styleTools";
import { NavLink } from "react-router-dom";

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
const LinkBlock = ({menu}) => {
  return (
    <LinkBlockStyled>
      {menu.map((value, index) => {
        return (
          <LinkStyled to={value.link} key={index} activeclassname="active">
            {value.name}
          </LinkStyled>
        );
      })}
    </LinkBlockStyled>
  );
};
export default LinkBlock;
