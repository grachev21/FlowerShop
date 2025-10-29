import { useRequestPut } from "@/hooks";
import { RxPlus } from "react-icons/rx";

const ButtonPlus = ({ item, setBasketItems, basketItemId }) => {
  const requestPut = useRequestPut("http://localhost:8000/core/api/Basket/");

  const plusProduct = async (product) => {
    try {
      // Call a hook
      product["quantity"] += 1;
      const result = await requestPut.request(product, product.id);

      // Updating the list on the cart page
      setBasketItems((prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === basketItemId) {
              if (currentQuantity > 1) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return null;
              }
            }
            return item;
          })
          .filter(Boolean)
      );
    } catch (err) {
      console.error("Error when decreasing quantity:", err);
    }
  };

  return (
    <button
      onClick={() => plusProduct(item)}
      className="bg-primary text-base-100 text-xl 
        rounded-full w-6 h-6 p-0.5 cursor-pointer 
        hover:bg-primary/80 transition-all"
    >
      <RxPlus />
    </button>
  );
};
export default ButtonPlus;
