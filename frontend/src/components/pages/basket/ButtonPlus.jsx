import { useRequestCustomEndpoint } from "@/hooks";
import { RxPlus } from "react-icons/rx";

const ButtonPlus = ({ item, setBasketItems }) => {

  const dataCustomEndpoint = useRequestCustomEndpoint("http://localhost:8000/core/api/Basket/plus_minus_product/");

  const plusProduct = async (productId, basketItemId, currentQuantity) => {
    try {
      const result = await dataCustomEndpoint.request(productId, "plus");

      setBasketItems(prevItems =>
        prevItems.map(item => {
          if (item.id === basketItemId) {
            if (currentQuantity > 1) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return null;
            }
          }
          return item;
        }).filter(Boolean)
      );
      console.log("Результат уменьшения:", result);
    } catch (err) {
      console.error("Ошибка при уменьшении количества:", err);
    }
  };
  return (
    <button
      onClick={() => plusProduct(item.product, item.id, item.quantity)}
      className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer hover:bg-primary/80 transition-all"
    >
      <RxPlus />
    </button>
  )
}
export default ButtonPlus;
