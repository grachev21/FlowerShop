import { BiRuble } from "react-icons/bi";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRequestToken } from "@/hooks";
import { Load } from "@/components";

const Buy = ({ productId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      {isModalOpen && <BuyModalContent productId={productId} onClose={handleCloseModal} />}

      <button className="btn btn-success mt-2" onClick={handleOpenModal}>
        КУПИТЬ
      </button>
    </main>
  );
};

// Компонент с хуками, который рендерится только при открытии
const BuyModalContent = ({ productId, onClose }) => {
  const { data, loading, error } = useGetRequestToken("http://localhost:8000/core/api/Basket/");
  const navigate = useNavigate();

  const [isFormData, setFormData] = useState({
    product: "",
    country: "",
    city: "",
    postal_code: "",
    street: "",
    house: "",
    apartment_office: "",
    status: "",
    phoneNumber: "",
    paid: false,
  });

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

  if (loading)
    return (
      <dialog className="modal" open>
        <div className="modal-box">
          <Load />
        </div>
      </dialog>
    );

  const product = data.find((item) => item.id === productId);

  return (
    <dialog className="modal" open>
      <div className="modal-box">
        {/* Ваша форма и содержимое модального окна */}
        <form action="" method="post">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Адрес доставки</h2>

            {/* Страна */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Страна</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="country"
                value={isFormData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Выберите страну
                </option>
                <option value="Россия">Россия</option>
                <option value="Казахстан">Казахстан</option>
                <option value="Беларусь">Беларусь</option>
              </select>
            </div>

            {/* city */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Город</span>
              </label>
              <input
                type="text"
                required
                name="city"
                value={isFormData.city}
                onChange={handleChange}
                placeholder="Москва"
                className="input input-bordered w-full"
              />
            </div>

            {/* Индекс */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Почтовый индекс</span>
              </label>
              <input
                type="text"
                name="postal_code"
                onChange={handleChange}
                required
                value={isFormData.postal_code}
                placeholder="123456"
                className="input input-bordered w-full"
              />
            </div>
            {/* Street */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Улица</span>
              </label>
              <input
                type="text"
                name="street"
                onChange={handleChange}
                required
                value={isFormData.street}
                placeholder="Ленина"
                className="input input-bordered w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* house */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Дом</span>
                </label>
                <input
                  type="text"
                  name="house"
                  onChange={handleChange}
                  placeholder="15"
                  required
                  value={isFormData.house}
                  className="input input-bordered w-full"
                />
              </div>

              {/* apartment_office */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Квартира/Офис</span>
                </label>
                <input
                  type="text"
                  name="apartment_office"
                  onChange={handleChange}
                  value={isFormData.apartment_office}
                  placeholder="42"
                  className="input input-bordered w-full"
                />
              </div>
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

export default Buy;
