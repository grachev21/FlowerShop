import styled from "styled-components";
import styleTools from "../../styles/styleTools";
import footerData from "./dataFooter";

import Logo from "../logo/Logo";

const FooterStyled = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SeparatingLineStyled = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${styleTools.color.grey};
  margin-bottom: 5rem;
`;
const TopBlockStyled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  @media (min-width: ${styleTools.size.xxl}) {
    width: 1400px;
  }
`;
const LowerBlockStyled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
`;
const ListStyled = styled.div`
  color: ${styleTools.color.black};
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-weight: 300;
  font-size: 1.1rem;
`;
const Footer = () => {
  return (
    <FooterStyled>
      <SeparatingLineStyled />
      <TopBlockStyled>
        <Logo />
        {footerData.map((value, index) => {
          return <ListStyled key={index}>{value}</ListStyled>;
        })}
      </TopBlockStyled>
      <LowerBlockStyled></LowerBlockStyled>
    </FooterStyled>
  );
};

export default Footer;
