import { ButtonPadding } from "@/components"
const Banner = ({ img }) => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-lg my-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
        <div className="h-full">
          <h1 className="text-5xl font-bold">ОБНОВЛЕНИЯ</h1>
          <p className="py-12">
            Мы хотели бы отметить, что наш офис не работает в выходные дни (суббота и воскресенье). Электронные письма и
            заказы читаются лишь // время от времени. Крайний срок приема заказов и заказов Fleurop – пятница в 17:00.
          </p>
          <ButtonPadding content={"Перейти"} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
