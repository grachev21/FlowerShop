import { Login, Register } from "@/components";

const LoginAndRegister = () => {
  return (
    <main className="flex flex-row justify-between w-full">
      <Login />
      <Register />
    </main>
  );
};
export default LoginAndRegister;
