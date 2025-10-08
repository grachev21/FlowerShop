import { MdArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ButtonBack = ({ to, content }) => {
  return (
    <NavLink
      to={to}
      className="flex flex-row items-center group"
    >
      <MdArrowBackIosNew color="green" />
      <div className="ml-4 font-bold cursor-pointer border-b border-transparent 
                     transition-all ease-in-out group-hover:opacity-70 
                     group-hover:border-primary text-primary">
        {content}
      </div>
    </NavLink>
  );
};

export default ButtonBack;