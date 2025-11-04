import { BiRuble } from "react-icons/bi";
import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestToken } from "@/hooks";
import { useState, useEffect } from "react";
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import ButtonDelete from "./ButtonDelete";
import Purchase from "./Purchase";


const Basket = () => {
  const { data: basketData, loading, error } = useGetRequestToken("http://localhost:8000/core/api/Basket/");

  /** @type {[BasketItem[], function(BasketItem[]): void]} */
  const [isBasketItems, setBasketItems] = useState([]);

  useEffect(() => {
    if (basketData) {
      setBasketItems(basketData);
    }
  }, [basketData]);

  if (loading) return <Load />;

  if (error) return <div className="text-center py-8 text-lg text-error">Ошибка загрузки корзины</div>;

  return (
    <div className="flex flex-col">
      {/* Верхний блок с заголовком и кнопкой назад */}
      <div className="flex flex-col items-start w-full box-border">
        <ButtonBack content="Назад" />
        <div className="font-normal text-2xl mt-4 mb-2">Корзина</div>
      </div>

      {/* Декоративный элемент с тенью */}
      <MiniImageShadow />

      {/* Список товаров в корзине */}
      {isBasketItems.length > 0 ? (
        isBasketItems.map((item) => <BasketItem key={item.id} item={item} setBasketItems={setBasketItems} />)
      ) : (
        <div className="text-center py-8 text-lg">Корзина пуста</div>
      )}
    </div>
  );
};

/**
 * Lower basket block
 * @component
 * @param {Object} props
 * @param {Object} props.item - An object written to the isBasketItems state for rendering
 * @param {Function} props.setBasketItems - Function to update the state of the cart in the render
 */
const BasketItem = ({ item, setBasketItems }) => {
  return (
    <div className="flex flex-row justify-between items-center border-b border-base-300 p-4">
      {/* Section 1: Product information */}
      <div className="flex flex-row justify-start items-center w-1/3">
        <img src={item.photos[0].image} className="w-16 h-16 m-4 object-cover rounded" alt="" />
        <div className="font-medium text-lg">{item.product_name}</div>
      </div>

      {/* Section 2: Product quantity management */}
      <div className="flex justify-center items-center gap-2">
        <ButtonDelete item={item} setBasketItems={setBasketItems} />
        <ButtonMinus item={item} setBasketItems={setBasketItems} />
        <div className="text-center w-10 h-8 border border-base-content flex items-center justify-center mx-2">
          {item.quantity}
        </div>
        {/* Кнопка увеличения количества */}
        <ButtonPlus item={item} setBasketItems={setBasketItems} />
      </div>
      {/* Секция 3: Цена и кнопка покупки */}
      <div className="flex flex-col items-end gap-2">
        {/* Отображение общей стоимости позиции */}
        <div className="flex flex-row items-center text-xl font-semibold">
          {/* Используем total_price если доступен, иначе рассчитываем самостоятельно */}
          {item.product_price * item.quantity}
          <BiRuble />
        </div>

        {/* Компонент для оформления покупки/добавления в заказ */}

        <Purchase product={item} />
      </div>
    </div>
  );
};
export default Basket;
