import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../input/Input";
import Button from "../button/Button";

const LoginStyled = styled.form`
  width: 320px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("run");
    console.log(email, "email");
    console.log(password, "password");
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/token/login/", {
        email: email,
        password: password,
      });
      console.log(response.data.auth_token, "<<<");
      localStorage.setItem("auth_token", response.data.auth_token);

      navigate("/");
      window.location.reload();

      setError("");
    } catch (error) {
      setError("Invalid email or password");
      alert(error.response.data.password);
    }
  };
  return (
    <LoginStyled onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input onDataSend={(data) => setPassword(data)} placeholder={"Введите пароль"} type={"password"} value={password} />
      <Button content={"Войти"} type={"submit"} />
    </LoginStyled>
  );
};
export default Login;
