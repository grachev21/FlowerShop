import { BiRuble } from "react-icons/bi";
import { useState, useRef } from "react";

const Purchase = ({ product }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  };
  return (
    <main>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form action="" method="post">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Адрес доставки</h2>

              {/* Индекс */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Почтовый индекс</span>
                </label>
                <input type="text" placeholder="123456" className="input input-bordered w-full" />
              </div>

              {/* Страна */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Страна</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="" disabled>
                    Выберите страну
                  </option>
                  <option value="Россия">Россия</option>
                  <option value="Казахстан">Казахстан</option>
                  <option value="Беларусь">Беларусь</option>
                </select>
              </div>

              {/* Регион/Область */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Регион/Область</span>
                </label>
                <input type="text" placeholder="Московская область" className="input input-bordered w-full" />
              </div>

              {/* Город */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Город</span>
                </label>
                <input type="text" placeholder="Москва" className="input input-bordered w-full" />
              </div>

              {/* Улица */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Улица</span>
                </label>
                <input type="text" placeholder="Ленина" className="input input-bordered w-full" />
              </div>

              {/* Дом и квартира в одной строке */}
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Дом</span>
                  </label>
                  <input type="text" placeholder="15" className="input input-bordered w-full" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Квартира/Офис</span>
                  </label>
                  <input type="text" placeholder="42" className="input input-bordered w-full" />
                </div>
              </div>

              {/* Product */}
              <div className="stats shadow w-full">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <div className="avatar">
                      <div className="w-16 rounded-b-lg">
                        <img src={product.photos[0].image} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="stat-value flex-col">{product.product_price}</div>
                    <BiRuble className="text-xl" />
                  </div>
                  <div className="stat-desc text-secondary">Категория - {product.product}</div>
                  <div className="stat-title">Название - {product.product_name}</div>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <button className="btn btn-primary mr-2">Оплатить</button>
            <form method="dialog">
              <button className="btn btn-secondary">Закрыть</button>
            </form>
          </div>
        </div>
      </dialog>

      <button className="btn btn-success mt-2" onClick={handleOpenModal}>
        КУПИТЬ
      </button>
    </main>
  );
};

export default Purchase;
