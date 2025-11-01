// components/ButtonDelete.jsx
import { RxCross2 } from "react-icons/rx";
import { useBasketActions } from "@/hooks/useBasketAction";

/**
 * Product removal button
 * @component
 * @param {Object} props
 * @param {Function} props.setBasketItems - Function to update the state of the cart in the render
 * @param {Object} props.item - An object written to the isBasketItems state for rendering
 * @param {Object} props.item.id - Product ID
 */
const ButtonDelete = ({ item, setBasketItems }) => {
  const { removeBasketItem } = useBasketActions();

  /**
   * Function onClick.
   * Calls the function from hook useBasketAction function removeBasketItem and sends to
   * product id and function for updating the object in the render
   */
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
