import logo from "@/media/logo/logo.webp";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <main className="flex items-center overflow-x-hidden overflow-y-hidden max-w-16 max-h-16 btn-circle">
        <img className="w-20 h-20 bg-cover bg-center" src={logo} alt="" />
      </main>
    </NavLink>
  );
};
export default Logo;
