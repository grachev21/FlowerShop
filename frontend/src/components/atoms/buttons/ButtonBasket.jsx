import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useGetRequestAuth } from "@/hooks";
import { Load } from "@/components";
import { useState, useEffect } from "react"; // ✅ Добавить useEffect

const ButtonBasket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const basketData = useGetRequestAuth("http://localhost:8000/core/api/Basket");

  // Используем useEffect для вычисления суммы
  useEffect(() => {
    if (basketData.data && basketData.data.length > 0) {
      const sum = basketData.data.reduce((acc, element) => {
        return acc + (element.total_price || 0);
      }, 0);
      setTotalPrice(sum);
    } else {
      setTotalPrice(0); // Сбрасываем если корзина пуста
    }
  }, [basketData.data]); //  Зависимость от basketData.data

  if (basketData.loading) return <Load />;

  //  Отображаем общую сумму
  return (
    // <NavLink to={"/Basket"} className="flex flex-row items-center h-min">
    //   <SlBasket size={22} />
    //   <div className="text-xl ml-2.5">
    //     {totalPrice > 0 ? totalPrice.toFixed(2) : "0"}
    //   </div>
    // </NavLink>

    <NavLink to={"/Basket"} className="flex flex-row items-center h-min">
      <div className="indicator mr-12">
        <span className="indicator-item badge badge-secondary">{totalPrice > 0 ? totalPrice.toFixed(2) : "0"}</span>
        <button className="btn">
          <SlBasket size={22} />
        </button>
      </div>
    </NavLink>
  );
};

export default ButtonBasket;
