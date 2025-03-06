import styled from "styled-components";

import Input from "../components/input/Input";

const LoginStyled = styled.div``;
const LoginBlockStyled = styled.div``;
const RegisterBlockStyled = styled.div``;

const Login = () => {
  return (
    <LoginStyled>
      <LoginBlockStyled><Input placeholder={"hello world"} /></LoginBlockStyled>
      <RegisterBlockStyled></RegisterBlockStyled>
    </LoginStyled>
  );
};
export default Login;
