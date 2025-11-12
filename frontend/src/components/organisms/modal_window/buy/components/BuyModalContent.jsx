import { useNavigate } from "react-router-dom";
import { useGetRequestToken } from "@/hooks";
import { Load, Input, Select } from "@/components";
import { BiRuble } from "react-icons/bi";
import { useState, useEffect } from "react";

const BuyModalContent = ({ productId, onClose }) => {
  const { data, loading, error } = useGetRequestToken("http://localhost:8000/core/api/Basket/");
  const navigate = useNavigate();
  const product = data.find((item) => item.id === productId);

  const [isFormData, setFormData] = useState({
    product: "",
    quantity: "",
    country: "",
    city: "",
    postal_code: "",
    street: "",
    house: "",
    apartment_office: "",
    product: "",
  });

  useEffect(() => {
    console.log(isFormData);
  }, [isFormData]);

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product: product.product,
        quantity: product.quantity,
      }));
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goLink = (id) => {
    navigate(`/productCard/${id}`);
  };

  if (loading) return <Load />;

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        {/* Ваша форма и содержимое модального окна */}
        <form action="" method="post">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Адрес доставки</h2>

            {/* Страна */}
            <Select
              name={"country"}
              titleOption={"Выберите страну"}
              listOption={["Россия", "Казахстан", "Белорусь"]}
              value={isFormData.country}
              onDataSend={handleChange}
              requiredOnOff={true}
            />
            {/* city */}
            <Input
              name={"city"}
              placeholder={"Город"}
              type={"text"}
              value={isFormData.city}
              requiredOnOff={true}
              onDataSend={handleChange}
            />

            {/* Индекс */}
            <Input
              name={"postal_code"}
              placeholder={"Индекс"}
              type={"text"}
              value={isFormData.postal_code}
              requiredOnOff={true}
              onDataSend={handleChange}
            />

            {/* Street */}
            <Input
              name={"street"}
              placeholder={"Улица"}
              type={"text"}
              value={isFormData.street}
              requiredOnOff={true}
              onDataSend={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* house */}
              <Input
                name={"house"}
                placeholder={"Дом"}
                type={"text"}
                value={isFormData.house}
                requiredOnOff={true}
                onDataSend={handleChange}
              />

              {/* apartment_office */}
              <Input
                name={"apartment_office"}
                placeholder={"Квартира/Офис"}
                type={"text"}
                value={isFormData.apartment_office}
                requiredOnOff={false}
                onDataSend={handleChange}
              />
            </div>

            <div className="stats shadow w-full">
              <div className="stat">
                {/* Product info */}
                <div className="stat-figure text-secondary">
                  <div onClick={() => goLink(product.product)} className="avatar cursor-pointer">
                    <div className="w-16 rounded-lg">
                      <img src={product.photos[0].image} alt={product.product_name} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="stat-value flex-col">{product.total_price}</div>
                  <BiRuble className="text-xl" />
                </div>
                <div className="stat-desc text-secondary">Количество - {product.quantity}</div>
                <div className="stat-desc text-accent">Цена за штуку - {product.product_price}</div>
                <div className="stat-title">Название - {product.product_name}</div>
              </div>
            </div>
          </div>
        </form>

        <div className="modal-action">
          <button className="btn btn-primary mr-2">Оплатить</button>
          <button className="btn btn-secondary" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </dialog>
  );
};
export default BuyModalContent;
