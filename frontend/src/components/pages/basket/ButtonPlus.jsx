import { RxPlus } from "react-icons/rx";
import { useBasketActions } from "@/hooks/useBasketAction";

/**
 * Button to increase the quantity of goods
 * @param {Object} props
 * @param {Object} props.item - Object with items from the cart in server
 * @param {Function} props.setBasketItems - State function to display data as an object
 */

const ButtonPlus = ({ item, setBasketItems }) => {
  const { updateBasketItem } = useBasketActions();

  const handlePlus = async () => {
    try {
      await updateBasketItem(item, { quantity: item.quantity + 1 }, setBasketItems);
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  return (
    <button
      onClick={handlePlus}
      className="bg-primary text-base-100 text-xl 
        rounded-full w-6 h-6 p-0.5 cursor-pointer 
        hover:bg-primary/80 transition-all flex items-center justify-center"
      title="Увеличить количество"
    >
      <RxPlus />
    </button>
  );
};

export default ButtonPlus;
