import { useGetRequestToken } from "@/hooks";
import { Load, Input, Select } from "@/components";
import { useState, useEffect } from "react";
import ProductInfo from "./ProductInfo";
import { useRequestPostAuth } from "@/hooks";
import { useNavigate } from "react-router-dom";

const BuyModalContent = ({ productId, onClose }) => {
  const navigate = useNavigate();
  const {
    post: post,
    data: dataPost,
    loading: loadPost,
    error: errorPost,
  } = useRequestPostAuth("http://127.0.0.1:8000/core/api/Order/");

  const { data, loading, error } = useGetRequestToken("http://localhost:8000/core/api/Basket/");

  // Добавляем проверку на существование data
  const product = data?.find((item) => item.id === productId);

  const [isFormData, setFormData] = useState({
    product: "",
    quantity: "",
    country: "",
    city: "",
    postal_code: "",
    street: "",
    house: "",
    apartment_office: "",
  });

  useEffect(() => {
    console.log("Form data:", isFormData);
  }, [isFormData]);

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        product: product.product || product.id, // Используем product.id если product.product нет
        quantity: product.quantity || 1,
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Важно: предотвращаем перезагрузку страницы

    try {
      await post(isFormData);
      console.log("Order created:", dataPost);

      navigate("/order/");

      // Если заказ успешно создан, закрываем модальное окно
      if (dataPost) {
        alert("Заказ успешно создан!");
        onClose();
      }
    } catch (err) {
      console.error("Error creating order:", err);
      console.log("Error details:", errorPost);
    }
  };

  // Показываем загрузку
  if (loading) return <Load />;

  // Показываем ошибку загрузки данных
  if (error) return <div className="text-red-500">Ошибка загрузки данных: {error.message}</div>;

  // Если продукт не найден
  if (!product) return <div className="text-red-500">Продукт не найден</div>;

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <form onSubmit={handleSubmit} method="POST">
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

            {/* Город */}
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

            {/* Улица */}
            <Input
              name={"street"}
              placeholder={"Улица"}
              type={"text"}
              value={isFormData.street}
              requiredOnOff={true}
              onDataSend={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Дом */}
              <Input
                name={"house"}
                placeholder={"Дом"}
                type={"text"}
                value={isFormData.house}
                requiredOnOff={true}
                onDataSend={handleChange}
              />

              {/* Квартира/Офис */}
              <Input
                name={"apartment_office"}
                placeholder={"Квартира/Офис"}
                type={"text"}
                value={isFormData.apartment_office}
                requiredOnOff={false}
                onDataSend={handleChange}
              />
            </div>

            {/* Информация о продукте */}
            <ProductInfo product={product} />
          </div>

          {/* Кнопки управления - ПЕРЕНЕСЕНЫ ВНУТРЬ формы */}
          <div className="modal-action mt-6">
            <button type="submit" className="btn btn-primary mr-2" disabled={loadPost}>
              {loadPost ? "Обработка..." : "Оплатить"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </form>

        {/* Показываем ошибку создания заказа */}
        {errorPost && (
          <div className="alert alert-error mt-4">
            <span>Ошибка при создании заказа: {errorPost.message}</span>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default BuyModalContent;
