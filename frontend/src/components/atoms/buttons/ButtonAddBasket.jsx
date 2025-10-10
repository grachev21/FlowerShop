import { useEffect, useState } from "react";
import { useAuthPost } from "@/hooks";
import { useGetRequestAuth } from "@/hooks";
import { NavLink } from "react-router-dom";

const ButtonAddBasket = ({ productId }) => {
  const [isStatusBasket, setStatusBasket] = useState(false);
  const { post, loading, error, data } = useAuthPost("http://127.0.0.1:8000/core/api/Basket/");
  const basket = useGetRequestAuth("http://127.0.0.1:8000/core/api/Basket/");

  useEffect(() => {
    if (!basket.loading && basket.data) {
      // Проверяем, что basket.data существует и является массивом
      const foundObject = basket.data.find(item => item.id === productId);

      // Сначала проверяем, что объект найден, потом сравниваем id
      if (foundObject) {
        setStatusBasket(true);
      } else {
        setStatusBasket(false);
      }
    }
  }, [basket.data, basket.loading, productId]);

  const handleClick = async () => {
    try {
      await post({
        product: productId,
        quantity: 1,
      });
      // После успешного добавления обновляем статус
      setStatusBasket(true);
    } catch (err) {
      console.error("Ошибка при добавлении в корзину:", err);
    }
  };

  return isStatusBasket ? (
    <NavLink
      to={"/Basket/"}
      className="relative py-2 uppercase text-lg font-normal w-full 
                text-center text-success border border-success
                cursor-pointer hover:bg-success/20 transition-all
                rounded-field"
    >
      ПЕРЕЙТИ В КОРЗИНУ
    </NavLink>
  ) : (
    <button
      onClick={handleClick}
      disabled={loading}
      className="relative py-2 uppercase text-lg font-normal w-full 
                text-center text-primary border border-primary 
                cursor-pointer hover:bg-primary/20 transition-all
                rounded-field disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "ДОБАВЛЕНИЕ..." : "ДОБАВИТЬ В КОРЗИНУ"}
    </button>
  );
};

export default ButtonAddBasket;
