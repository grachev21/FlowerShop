import { ButtonBack, MiniImageShadow, Load } from "@/components";
import { useGetRequestToken } from "@/hooks";
import { BiRuble } from "react-icons/bi";

const Order = () => {
  const dataOrder = useGetRequestToken("http://localhost:8000/core/api/Order/");

  if (dataOrder.loading) return <Load />;

  return (
    <div className="flex flex-col">
      {dataOrder.data.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row justify-between items-center border-b border-base-300 p-4">
            {/* Product information */}
            <div className="flex flex-row justify-start items-center w-1/3">
              <img
                src={item.product.photos[0].image}
                className="w-16 h-16 m-4 object-cover rounded"
                alt={item.product.name}
              />
              <div className="font-medium text-lg">{item.product.name}</div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p className="text-base-content/60">Статус заказа:</p>
              <div className="text-center flex items-center justify-center text-md font-bold">
                {item.status_display}
              </div>
            </div>

            {/* Product quantity management */}
            <div className="flex justify-center items-center gap-2">
              <div className="text-center w-10 h-8 border border-base-content flex items-center justify-center mx-2">
                {item.quantity || 1}
              </div>
            </div>

            {/* Price and buy button */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-row items-center text-xl font-semibold">
                {item.product_price || item.product?.price}
                <BiRuble />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
