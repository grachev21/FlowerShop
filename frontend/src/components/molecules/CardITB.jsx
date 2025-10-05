import { useNavigate } from "react-router-dom";

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
          <button
            onClick={() => {
              handleClick(value.id);
            }}
            className="btn btn-primary w-full"
          >
            Перейти
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardITB;
