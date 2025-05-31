import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Load } from "@/components";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [isLogo, setLogo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/assets/api/Logo/")
        setLogo(response.data)
      } catch {
        console.log("error request:", error)
      }
    }
    fetchData()
  }, [])

  if (!isLogo) return <Load />

  return (
    <NavLink to={isLogo[0].link}>
      <ContainerStyled>
        <LogoStyled $logo={isLogo[0].image} />
      </ContainerStyled>
    </NavLink>
  );
};
export default Logo;
