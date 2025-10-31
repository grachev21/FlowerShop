// components/Basket.jsx
import { BiRuble } from "react-icons/bi";
import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestAuth } from "@/hooks";
import { useState, useEffect } from "react";
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import ButtonDelete from "./ButtonDelete";
import Purchase from "./Purchase";

const Basket = () => {
  const { data: basketData, loading, error } = useGetRequestAuth("http://localhost:8000/core/api/Basket/");
  const [basketItems, setBasketItems] = useState([]);

  // Синхронизируем локальное состояние с данными из API
  useEffect(() => {
    if (basketData) {
      setBasketItems(basketData);
    }
  }, [basketData]);

  if (loading) return <Load />;
  if (error) return <div className="text-center py-8 text-lg text-error">Ошибка загрузки корзины</div>;

  return (
    <div className="flex flex-col">
      {/* Верхний блок */}
      <div className="flex flex-col items-start w-full box-border">
        <ButtonBack content="Назад" />
        <div className="font-normal text-2xl mt-4 mb-2">Корзина</div>
      </div>

      <MiniImageShadow />

      {/* Список товаров */}
      {basketItems.length > 0 ? (
        basketItems.map((item) => <BasketItem key={item.id} item={item} setBasketItems={setBasketItems} />)
      ) : (
        <div className="text-center py-8 text-lg">Корзина пуста</div>
      )}
    </div>
  );
};

// Компонент элемента корзины
const BasketItem = ({ item, setBasketItems }) => {
  const getProductImage = () => {
    return item.product?.photos?.[0]?.image || item.photos?.[0]?.image || "/placeholder-image.jpg";
  };

  const getProductName = () => {
    return item.product_name || item.product?.name || "Неизвестный товар";
  };

  return (
    <div className="flex flex-row justify-between items-center border-b border-base-300 p-4">
      {/* Информация о товаре */}
      <div className="flex flex-row justify-start items-center w-1/3">
        <img
          src={getProductImage()}
          className="w-16 h-16 m-4 object-cover rounded"
          alt={getProductName()}
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
        <div className="font-medium text-lg">{getProductName()}</div>
      </div>

      {/* Управление количеством */}
      <div className="flex justify-center items-center gap-2">
        <ButtonDelete item={item} setBasketItems={setBasketItems} />
        <ButtonMinus item={item} setBasketItems={setBasketItems} />

        <div className="text-center w-10 h-8 border border-base-content flex items-center justify-center mx-2">
          {item.quantity}
        </div>

        <ButtonPlus item={item} setBasketItems={setBasketItems} />
      </div>

      {/* Цена и покупка */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex flex-row items-center text-xl font-semibold">
          {item.total_price || item.product_price * item.quantity}
          <BiRuble />
        </div>
        <Purchase product={item} />
      </div>
    </div>
  );
};

export default Basket;
