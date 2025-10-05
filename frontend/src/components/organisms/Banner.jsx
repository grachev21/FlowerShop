const Banner = ({ img }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">ОБНОВЛЕНИЯ</h1>
          <p className="py-6">
            Мы хотели бы отметить, что наш офис не работает в выходные дни (суббота и воскресенье). Электронные письма и
            заказы читаются лишь // время от времени. Крайний срок приема заказов и заказов Fleurop – пятница в 17:00.
          </p>
          <button className="btn btn-primary">Перейти</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
