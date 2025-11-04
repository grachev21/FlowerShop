import { useState } from "react";
import { ButtonHoverColor } from "@/components";

const DropDownMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = (open) => {
    setIsOpen(open);
  };

  return (
    <main
      className="pb-5 relative px-5 cursor-pointer"
      onMouseEnter={() => showMenu(true)}
      onMouseLeave={() => showMenu(false)}
    >
      <ButtonHoverColor content={"Что мы делаем"} />

      {/* Выпадающее меню */}
      <div
        className={`
          absolute w-60 top-10
          flex flex-col justify-between
          transition-all duration-300
          shadow-xl
          p-5
          z-50
          bg-base-100
          before:content-[''] before:absolute before:top-0 before:left-0 
          before:w-1.5 before:h-full before:bg-primary
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {menu.map((value, index) => (
          <ButtonHoverColor key={index} content={value.name} />
        ))}
      </div>
    </main>
  );
};

export default DropDownMenu;
