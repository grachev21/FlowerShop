import { RxPlus } from "react-icons/rx";
import { RxMinus } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BiRuble } from "react-icons/bi";
import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestAuth, useAuthPost } from "@/hooks";

const Basket = () => {
  const { data, loading, error } = useGetRequestAuth("http://localhost:8000/core/api/Basket");
  const removeItemRequest = useAuthPost("http://localhost:8000/core/api/Basket/remove_item/");
  console.log(data);

  const removeItem = async (productId) => {
    const result = await removeItemRequest.post({ product: productId });
    if (result?.message) {
      console.log("Удалено:", result.message);
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
      {data.map((value, index) => (
        <div key={index} className="flex flex-row justify-between items-center border-b border-base-300">
          {/* Информация о товаре */}
          <div className="flex flex-row justify-start items-center w-1/3">
            <img
              src={value.photos[0].image}
              className="w-16 h-16 m-4"
              alt={value.product_name}
            />
            <div className="font-medium text-lg">
              {value.product_name}
            </div>
          </div>

          {/* Управление количеством */}
          <form className="flex justify-center items-center">
            <div className="mr-4">
            <RxCross2 className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer" />
            </div>
            <RxPlus className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer" />
            <div className="text-center w-10 h-8 border border-gray-300 m-4 flex items-center justify-center">
              {value.quantity}
            </div>
            <RxMinus className="bg-primary text-base-100 text-xl rounded-full w-6 h-6 p-0.5 cursor-pointer" />
          </form>

          {/* Цена */}
          <div className="flex flex-row items-center text-xl">
            {value.product_price}
            <BiRuble />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;