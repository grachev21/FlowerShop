import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "@/hooks";
import styleTools from "@/styles/styleTools";

import { Input, Button, ButtonPadding } from "@/components";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    await login(credentials); // Вызываем хук для авторизации
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input
        onDataSend={(data) => setPassword(data)}
        placeholder={"Введите пароль"}
        type={"password"}
        value={password}
      />
      <Button content={["Войти", "Входим"]} type={"submit"} loading={loading} />
      {error && <ErrorStyled>{JSON.stringify(error)}</ErrorStyled>}
      {success && <SuccessStyled>Вы вошли!</SuccessStyled>}
    </LoginStyled>
  );
};
export default Login;
