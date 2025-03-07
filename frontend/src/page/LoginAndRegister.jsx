import styled from "styled-components";

import Login from "../components/login/Login";
import Register from "../components/register/Register";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
