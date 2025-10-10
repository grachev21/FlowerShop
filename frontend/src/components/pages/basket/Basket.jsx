import { RxPlus } from "react-icons/rx";
import { RxMinus } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BiRuble } from "react-icons/bi";
import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestAuth, useAuthPost } from "@/hooks";

const Basket = () => {
  const { data, loading, error } = useGetRequestAuth("http://localhost:8000/core/api/Basket/");
  const { delete: removeItem, loading: removeLoading } = useAuthPost("http://localhost:8000/core/api/Basket/");

  const removeProduct = async (basketItemId) => {
    try {
      await removeItem(basketItemId); // Передаем ID элемента корзины
      console.log("Товар удален из корзины");
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  if (loading) return <Load />;

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

      {/* Список товаров */}
      {data?.map((item) => (
        <div key={item.id} className="flex flex-row justify-between items-center border-b border-base-300 p-4">
          {/* Информация о товаре */}
          <div className="flex flex-row justify-start items-center w-1/3">
            <img
              src={item.product?.photos?.[0]?.image || item.photos?.[0]?.image}
              className="w-16 h-16 m-4 object-cover"
              alt={item.product_name || item.product?.name}
            />
            <div className="font-medium text-lg">
              {item.product_name || item.product?.name}
            </div>
          </div>

          {/* Управление количеством */}
          <div className="flex justify-center items-center">
            {/* Удаление товара */}
            <div className="mr-4">
              <RxCross2
                onClick={() => removeProduct(item.id)} // Используем item.id (ID элемента корзины)
                disabled={removeLoading}
                className={`bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer transition-all ${removeLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/80'
                  }`}
              />
            </div>
            <RxPlus className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer hover:bg-primary/80 transition-all" />
            <div className="text-center w-10 h-8 border border-base-content m-4 flex items-center justify-center">
              {item.quantity}
            </div>
            <RxMinus className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer hover:bg-primary/80 transition-all" />
          </div>

          {/* Цена */}
          <div className="flex flex-row items-center text-xl">
            {item.product_price || item.product?.price}
            <BiRuble />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
