import { useEffect, useState } from "react";
import { useGetRequestAuth, useRequestPostAuth } from "@/hooks";
import { NavLink } from "react-router-dom";

const ButtonAddBasket = ({ productId }) => {
  const [isStatusBasket, setStatusBasket] = useState(false);
  const dataPostBasket = useRequestPostAuth("http://127.0.0.1:8000/core/api/Basket/");
  const dataGetBasket = useGetRequestAuth("http://127.0.0.1:8000/core/api/Basket/");

  useEffect(() => {
    if (!dataGetBasket.loading && dataGetBasket.data) {
      const foundObject = dataGetBasket.data.find(item => item.product === productId);

      if (foundObject) {
        setStatusBasket(true);
      } else {
        setStatusBasket(false);
      }
    }
  }, [dataGetBasket.data, dataGetBasket.loading, productId]);

  const handleClick = async () => {
    try {
      await dataPostBasket.post({
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
      disabled={dataPostBasket.loading}
      className="relative py-2 uppercase text-lg font-normal w-full 
                text-center text-primary border border-primary 
                cursor-pointer hover:bg-primary/20 transition-all
                rounded-field disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {dataPostBasket.loading ? "ДОБАВЛЕНИЕ..." : "ДОБАВИТЬ В КОРЗИНУ"}
    </button>
  );
};

export default ButtonAddBasket;
