import { useState } from "react";
import { useLogin } from "@/hooks";

import { Input, Button } from "@/components";

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
    <form className="w-80" onSubmit={handleSubmit}>
      <Input onDataSend={(data) => setEmail(data)} placeholder={"Введите свой Email"} type={"email"} value={email} />
      <Input
        onDataSend={(data) => setPassword(data)}
        placeholder={"Введите пароль"}
        type={"password"}
        value={password}
      />
      <button type="submit" className="btn btn-outline btn-success w-full rounded-none">
        {loading ? "ВХОДИМ" : "ВОЙТИ"}
      </button>

      {error && <div className="text-warning">{JSON.stringify(error)}</div>}
      {success && <div className="text-success">Вы вошли!</div>}
    </form>
  );
};
export default Login;
