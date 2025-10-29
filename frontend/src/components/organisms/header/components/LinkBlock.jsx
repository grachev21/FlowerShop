import { NavLink } from "react-router-dom";
import { useLogout } from "@/hooks";

const LinkBlock = ({ menu, isAuthenticated }) => {
  console.log(isAuthenticated, "isAuthenticated");
  const { logout } = useLogout();

  return (
    // Main menu link
    <div className="hidden lg:flex flex-row">
      {menu.slice(0, 4).map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) =>
            `h-6 text-sm uppercase font-lg mx-5 mt-2 text-base-content 
            transition-all hover:text-primary ${isActive ? "text-primary border-b border-primary" : ""}`
          }
        >
          {item.name}
        </NavLink>
      ))}
      {/* User buttons */}
      {isAuthenticated ? (
        <button
          onClick={logout}
          className="h-6 text-sm uppercase font-light mx-5 mt-2 text-base-content transition-all duration-300 hover:text-primary cursor-pointer"
        >
          {menu[5].name}
        </button>
      ) : (
        <NavLink
          to={menu[4].link}
          className={({ isActive }) =>
            `h-6 text-sm uppercase font-lg mx-5 mt-2 text-base-content transition-all hover:text-primary ${isActive ? "text-primary border-b border-primary" : ""
            }`
          }
        >
          {menu[4].name}
        </NavLink>
      )}
    </div>
  );
};

export default LinkBlock;
