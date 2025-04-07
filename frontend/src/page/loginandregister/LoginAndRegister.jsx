import styled from "styled-components";
import { Login, Register } from "@/components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const LoginStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1400px;
`;

const LoginAndRegister = () => {
  return (
    <ContainerStyled>
      <LoginStyled>
        <Login />
        <Register />
      </LoginStyled>
    </ContainerStyled>
  );
};
export default LoginAndRegister;
