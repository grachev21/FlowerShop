import { RxCross2 } from "react-icons/rx";
import { useRequestDeleteAuth } from "@/hooks";

const ButtonDelete = (id) => {
  const dataDeleteBasket = useRequestDeleteAuth("http://localhost:8000/core/api/Basket/");

  const removeProduct = async (basketItemId) => {
    try {
      await dataDeleteBasket.delete(basketItemId);

      setBasketItems((prevItems) => prevItems.filter((item) => item.id !== basketItemId));

      console.log("Товар удален, список обновлен");
    } catch (err) {
      console.error("Ошибка при удалении товара:", err);
    }
  };
  return (
    <div className="mr-4">
      <button
        onClick={() => removeProduct(id)}
        disabled={dataDeleteBasket.loading}
        className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 transition-all 
        hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default ButtonDelete;
