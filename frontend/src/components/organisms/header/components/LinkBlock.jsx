import { NavLink } from "react-router-dom";
import { useLogout } from "@/hooks";

const LinkBlock = ({ menu, isAuthenticated }) => {
  const { logout } = useLogout();

  return (
    <div className="hidden lg:flex flex-row">
      {menu.slice(0, 3).map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `h-6 text-sm uppercase font-lg mx-5 mt-2 text-base-content 
            transition-all hover:text-primary ${isActive ? "text-primary border-b border-primary" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}

      {isAuthenticated ? (
        <button
          onClick={logout}
          className="h-6 text-sm uppercase font-light mx-5 mt-2 text-base-content transition-all duration-300 hover:text-primary cursor-pointer"
        >
          Выйти
        </button>
      ) : (
        <NavLink
          to={menu[3].link}
          className={({ isActive }) =>
            `h-6 text-sm uppercase font-lg mx-5 mt-2 text-base-content transition-all hover:text-primary ${isActive ? "text-primary border-b border-primary" : ""
            }`
          }
        >
          {menu[3].name}
        </NavLink>
      )}
    </div>
  );
};

export default LinkBlock;
