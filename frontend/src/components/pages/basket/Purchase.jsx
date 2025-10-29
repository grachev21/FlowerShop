const Purchase = () => {
  return (
    <main>
      <dialog id="my_modal_1" className="modal">
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
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Выберите страну
                  </option>
                  <option>Россия</option>
                  <option>Казахстан</option>
                  <option>Беларусь</option>
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
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
};
export default Purchase;
