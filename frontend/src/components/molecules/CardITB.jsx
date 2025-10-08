import { useNavigate } from "react-router-dom";
import { ButtonPadding } from "@/components";

const CardITB = ({ value }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/catalog", { state: id });
  };

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-10 pt-10 h-full">
        <img src={value.image} alt="Shoes" className="rounded-xl h-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{value.name}</h2>
        <p>{value.slogan}</p>
        <div className="card-actions w-full px-5">
          <ButtonPadding
            onClick={() => {
              handleClick(value.id);
            }}
            content={"Перейти"}
          />
        </div>
      </div>
    </div>
  );
};
export default CardITB;
