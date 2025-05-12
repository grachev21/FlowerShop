// Импортируем необходимые хуки из React
import { useState, useEffect } from "react";

// Создаем кастомный хук useWindowWidth
const useWindowWidth = () => {
  // Используем хук useState для создания состояния windowWidth, 
  // которое будет хранить текущую ширину окна браузера.
  // Начальное значение устанавливается как текущая ширина окна.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Используем хук useEffect для отслеживания изменений размеров окна
  useEffect(() => {
    // Функция handleResize обновляет состояние windowWidth 
    // при каждом изменении размеров окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем слушатель события "resize" на объект window,
    // который будет вызывать handleResize при изменении размеров окна
    window.addEventListener("resize", handleResize);

    // Возвращаем функцию очистки, которая удаляет слушатель события "resize"
    // при размонтировании компонента, чтобы избежать утечек памяти
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только при монтировании и размонтировании компонента

  // Возвращаем текущее значение ширины окна
  return windowWidth;
};

// Экспортируем хук useWindowWidth для использования в других компонентах
export default useWindowWidth;
