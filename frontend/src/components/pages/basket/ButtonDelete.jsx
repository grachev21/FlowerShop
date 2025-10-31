// components/ButtonDelete.jsx
import { RxCross2 } from "react-icons/rx";
import { useBasketActions } from "@/hooks/useBasketAction";

const ButtonDelete = ({ item, setBasketItems }) => {
  const { removeBasketItem } = useBasketActions();

  const handleRemove = async () => {
    try {
      await removeBasketItem(item.id, setBasketItems);
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="mr-4">
      <button
        onClick={handleRemove}
        className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 transition-all 
        hover:bg-primary/80 cursor-pointer flex items-center justify-center"
        title="Удалить из корзины"
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default ButtonDelete;