import { useState } from "react";
import useRegister from "@/hooks/useRegister";
import { Input, Button } from "@/components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { register, loading, error, primary } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register({
      email,
      password,
      confirmPassword,
    });
  };

  if (primary) {
    navigate("/");
  }

  return (
    <form className="w-80" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-outline btn-primary w-full rounded-none">
        {loading ? "РЕГИСТРАЦИЯ" : "РЕГИСТРИРУЕМСЯ"}
      </button>
      {error && <div className="text-warning">{"email: " + error.email}</div>}
      {error && <div className="text-warning">{"password: " + error.password}</div>}
      {primary && <div className="text-primary">Регистрация прошла успешно!</div>}
    </form>
  );
};
export default Register;
