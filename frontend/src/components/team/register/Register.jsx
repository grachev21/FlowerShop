import { useState } from "react";
import useRegister from "@/hooks/useRegister";

import styled from "styled-components";
import styleTools from "@/styles/styleTools";

import { Input, Button } from "@/components";
import { useNavigate } from "react-router-dom";

const RegisterStyled = styled.form`
  width: 320px;
`;
const SuccessStyled = styled.div`
  color: ${styleTools.color.green};
`;
const ErrorStyled = styled.div`
  color: ${styleTools.color.green};
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { register, loading, error, success } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register({
      email,
      password,
      confirmPassword,
    });
  };

  if (success) {
    navigate("/");
  }

  return (
    <RegisterStyled onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input
        onDataSend={(data) => setPassword(data)}
        placeholder={"Введите пароль"}
        type={"password"}
        value={password}
      />
      <Input
        onDataSend={(data) => setConfirmPassword(data)}
        placeholder={"Повторите пароль"}
        type={"password"}
        value={confirmPassword}
      />
      <Button content={["Регистрация", "Регестрируемся"]} type={"submit"} loading={loading} />
      {error && <ErrorStyled>{JSON.stringify(error)}</ErrorStyled>}
      {success && <SuccessStyled>Регистрация прошла успешно!</SuccessStyled>}
    </RegisterStyled>
  );
};
export default Register;
