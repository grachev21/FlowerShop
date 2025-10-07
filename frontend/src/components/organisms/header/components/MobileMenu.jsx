import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ButtonBasket } from "@/components";

const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex items-center">
      <ButtonBasket />
      <div className="pl-7 flex cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose size={26} /> : <FiMenu size={26} />}
      </div>
      <div
        style={{ transform: `scaleY(${isOpen ? 1 : 0})` }}
        className="left-0 top-30 absolute flex flex-col bg-success-content/60 backdrop-blur-lg 
                  overflow-hidden w-full transition-all origin-top py-3.5 z-50 lg:hidden"
      >
        {menu.map((value, index) => (
          <NavLink
            key={index}
            to={value.link}
            className={({ isActive }) =>
              `h-6 text-base uppercase font-medium mx-5 mt-5 text-end transition hover:text-success ${
                isActive ? "text-success border-b-2 border-b-success pb-8" : "text-base-content"
              }`
            }
          >
            {value.name}
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default MobileMenu;
