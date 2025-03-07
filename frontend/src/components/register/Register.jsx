import { useState } from "react";
import axios from "axios";

import styled from "styled-components";

import Input from "../input/Input";
import Button from "../button/Button";

const RegisterStyled = styled.form`
  width: 320px;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
        email: email,
        password: password,
      });
      console.log("Пользователь создан", response.data);

      window.location.reload();
    } catch (error) {
      console.error("Ошибка регистрации!", error.response.data);
      alert(error.response.data.password)
    }
  };

  return (
    <RegisterStyled onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input onDataSend={(data) => setPassword(data)} placeholder={"Введите пароль"} type={"password"} value={password} />
      <Input onDataSend={(data) => setConfirmPassword(data)} placeholder={"Повторите пароль"} type={"password"} value={confirmPassword} />
      <Button content={"Регистрация"} type={"submit"} />
    </RegisterStyled>
  );
};
export default Register;
