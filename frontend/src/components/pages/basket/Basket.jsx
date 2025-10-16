import { RxCross2 } from "react-icons/rx";
import { BiRuble } from "react-icons/bi";
import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestAuth, useRequestDeleteAuth, useRequestCustomEndpoint } from "@/hooks";
import { useState, useEffect } from "react";
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import ButtonDelete from "./ButtonDelete";


const Basket = () => {
  const dataGetBasket = useGetRequestAuth("http://localhost:8000/core/api/Basket/");
  const dataDeleteBasket = useRequestDeleteAuth("http://localhost:8000/core/api/Basket/");
  const dataCustomEndpoint = useRequestCustomEndpoint("http://localhost:8000/core/api/Basket/plus_minus_product/");
  const [basketItems, setBasketItems] = useState([]); // Локальное состояние для товаров

  // Синхронизируем локальное состояние с данными из API
  useEffect(() => {
    if (dataGetBasket.data) {
      setBasketItems(dataGetBasket.data);
    }
  }, [dataGetBasket.data]);

  const removeProduct = async (basketItemId) => {
    try {
      await dataDeleteBasket.delete(basketItemId);

      setBasketItems(prevItems => prevItems.filter(item => item.id !== basketItemId));

      console.log("Товар удален, список обновлен");

    } catch (err) {
      console.error("Ошибка при удалении товара:", err);
    }
  };

  const increaseQuantity = async (basketItemId) => {
    console.log("Увеличить количество для:", basketItemId);
  };

  // MINUS


  if (dataGetBasket.loading) return <Load />;

  return (
    <div className="flex flex-col">
      {/* Верхний блок */}
      <div className="flex flex-col items-start w-full box-border">
        <ButtonBack content={"Назад"} />
        <div className="font-normal text-2xl mt-4 mb-2">
          Корзина
        </div>
      </div>

      <MiniImageShadow />

      {/* Список товаров - используем локальное состояние basketItems */}
      {basketItems.length > 0 ? (
        basketItems.map((item) => (
          <div key={item.id} className="flex flex-row justify-between items-center border-b border-base-300 p-4">
            {/* Информация о товаре */}
            <div className="flex flex-row justify-start items-center w-1/3">
              <img
                src={item.product?.photos?.[0]?.image || item.photos?.[0]?.image}
                className="w-16 h-16 m-4 object-cover"
                alt={item.product_name || item.product?.name}
                onError={(e) => {
                  e.target.src = '/placeholder-image.jpg'; // Запасное изображение
                }}
              />
              <div className="font-medium text-lg">
                {item.product_name || item.product?.name}
              </div>
            </div>

            {/* Управление количеством */}
            <div className="flex justify-center items-center">
              {/* Удаление товара */}
              <div className="mr-4">
                <button
                  onClick={() => removeProduct(item.id)}
                  disabled={dataDeleteBasket.loading}
                  className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 transition-all hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <RxCross2 />
                </button>
              </div>

              {/* Увеличение количества */}
              <ButtonPlus item={item} setBasketItems={setBasketItems} />

              {/* Отображение количества */}
              <div className="text-center w-10 h-8 border border-base-content m-4 flex items-center justify-center">
                {item.quantity}
              </div>

              {/* Уменьшение количества */}

              <ButtonMinus item={item} setBasketItems={setBasketItems} />
            </div>

            {/* Цена */}
            <div className="flex flex-row items-center text-xl">
              {item.product_price || item.product?.price}
              <BiRuble />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8 text-lg">
          {dataGetBasket.loading ? "Загрузка..." : "Корзина пуста"}
        </div>
      )}
    </div>
  );
};

export default Basket;
