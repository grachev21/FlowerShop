import { NavLink } from "react-router-dom";
import { useLogout } from "@/hooks";

const LinkBlock = ({ menu, isAuthenticated }) => {
  const { logout } = useLogout();

  const linkClasses = "h-6 text-sm uppercase font-light mx-5 mt-2 text-black transition-all duration-300 hover:text-green-500";
  const activeClasses = "text-green-500 border-b border-green-500";

  return (
    <div className="hidden lg:flex flex-row">
      <NavLink
        to={menu[0].link}
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeClasses : ""}`
        }
      >
        {menu[0].name}
      </NavLink>
      
      <NavLink
        to={menu[1].link}
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeClasses : ""}`
        }
      >
        {menu[1].name}
      </NavLink>
      
      <NavLink
        to={menu[2].link}
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeClasses : ""}`
        }
      >
        {menu[2].name}
      </NavLink>

      {isAuthenticated ? (
        <button
          onClick={logout}
          className={`${linkClasses} cursor-pointer hover:text-green-500`}
        >
          Выйти
        </button>
      ) : (
        <NavLink
          to={menu[3].link}
          className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ""}`
          }
        >
          {menu[3].name}
        </NavLink>
      )}
    </div>
  );
};

export default LinkBlock;