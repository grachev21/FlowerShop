// hooks/useBasketActions.jsx
import { useRequestPut, useRequestDelete } from "./index";

export const useBasketActions = () => {
  const { request: requestPut } = useRequestPut("http://localhost:8000/core/api/Basket/");
  const { request: requestDelete } = useRequestDelete("http://localhost:8000/core/api/Basket/");

  const updateBasketItem = async (item, updates, setBasketItems) => {
    try {
      const updatedItem = { ...item, ...updates };
      const result = await requestPut({ body: updatedItem, id: item.id });

      // Обновляем состояние с новыми данными с сервера (включая total_price)
      setBasketItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? { ...prevItem, ...result } : prevItem))
      );

      return result;
    } catch (err) {
      console.error("Error updating basket item:", err);
      throw err;
    }
  };

  const removeBasketItem = async (itemId, setBasketItems) => {
    try {
      await requestDelete({ id: itemId });
      setBasketItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (err) {
      console.error("Error removing basket item:", err);
      throw err;
    }
  };

  return { updateBasketItem, removeBasketItem };
};
