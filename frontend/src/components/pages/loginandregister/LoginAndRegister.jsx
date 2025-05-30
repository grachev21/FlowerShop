import styled from "styled-components";
import { Login, Register } from "@/components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const LoginAndRegister = () => {
  return (
    <ContainerStyled>
        <Login />
        <Register />
    </ContainerStyled>
  );
};
export default LoginAndRegister;
