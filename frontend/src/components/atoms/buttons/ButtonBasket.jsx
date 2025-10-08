import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const ButtonBasket = () => {
  return (
    <NavLink
      to={"/Basket"}
      className="flex flex-row items-center h-min"
    >
      <SlBasket size={22} />
      <div className="text-xl ml-2.5">
        0
      </div>
    </NavLink>
  );
};

export default ButtonBasket;