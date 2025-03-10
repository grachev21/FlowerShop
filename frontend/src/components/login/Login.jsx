import styled from "styled-components";
import styleTools from "../../styles/styleTools";
import { useState } from "react";
import useLogin from "../../customHooks/useLogin";

import Input from "../input/Input";
import Button from "../button/Button";

const LoginStyled = styled.form`
  width: 320px;
`;
const SuccessStyled = styled.div`
  color: ${styleTools.color.green};
`;
const ErrorStyled = styled.div`
  color: ${styleTools.color.green};
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading, error, success, token } = useLogin();
  console.log(token, "token to");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    await login(credentials); // Вызываем хук для авторизации
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input onDataSend={(data) => setPassword(data)} placeholder={"Введите пароль"} type={"password"} value={password} />
      <Button content={["Войти", "Входим"]} type={"submit"} loading={loading} />
      {error && <ErrorStyled>{JSON.stringify(error)}</ErrorStyled>}
      {success && <SuccessStyled>Вы вошли!</SuccessStyled>}
    </LoginStyled>
  );
};
export default Login;
