// components/ButtonMinus.jsx
import { RxMinus } from "react-icons/rx";
import { useBasketActions } from "@/hooks/useBasketAction";

const ButtonMinus = ({ item, setBasketItems }) => {
  const { updateBasketItem } = useBasketActions();

  const handleMinus = async () => {
    if (item.quantity <= 1) return;

    try {
      // Обновляем количество на сервере и в состоянии
      await updateBasketItem(item, { quantity: item.quantity - 1 }, setBasketItems);
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  const isDisabled = item.quantity <= 1;

  return (
    <button
      onClick={handleMinus}
      disabled={isDisabled}
      className={`bg-primary text-base-100 text-xl 
        rounded-full w-6 h-6 p-0.5 
        ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-primary/80"} 
        transition-all flex items-center justify-center`}
      title={isDisabled ? "Минимальное количество" : "Уменьшить количество"}
    >
      <RxMinus />
    </button>
  );
};

export default ButtonMinus;
