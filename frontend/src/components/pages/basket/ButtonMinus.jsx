import { useRequestPut } from "@/hooks";
import { useEffect, useState } from "react";
import { RxMinus } from "react-icons/rx";

const ButtonMinus = ({ item, setBasketItems, basketItemId }) => {
  const [isShowButton, setShowButton] = useState();
  const requestPut = useRequestPut("http://localhost:8000/core/api/Basket/");

  useEffect(() => {
    if (item.quantity <= 1) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [basketItemId]);
  const minusProduct = async (product) => {
    try {
      // Subtract the amount before sending it to the hook
      if (product["quantity"] > 1) {
        // Call a hook
        product["quantity"] -= 1;
        const result = await requestPut.request({ body: product, id: product.id });

        // Updating the list on the cart page
        setBasketItems((prevItems) =>
          prevItems
            .map((item) => {
              if (item.id === basketItemId) {
                if (currentQuantity > 1) {
                  return { ...item, quantity: item.quantity - 1 };
                } else {
                  return null;
                }
              }
              return item;
            })
            .filter(Boolean)
        );
      }
    } catch (err) {
      console.error("Error when decreasing quantity:", err);
    }
  };

  return (
    <button
      onClick={() => minusProduct(item)}
      className={`bg-primary text-base-100 text-xl 
        rounded-full w-6 h-6 p-0.5 
        ${isShowButton ? "cursor-pointer" : "cursor-not-allowed"} 
        hover:bg-primary/80 transition-all`}
    >
      <RxMinus />
    </button>
  );
};
export default ButtonMinus;
