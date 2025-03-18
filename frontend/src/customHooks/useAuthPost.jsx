// Импортируем хук useState из React для управления состоянием
import { useState } from "react";

// Создаем кастомный хук useAuthPost, который принимает URL в качестве аргумента
const useAuthPost = (url) => {
  // Состояние для отслеживания загрузки (true/false)
  const [loading, setLoading] = useState(false);
  // Состояние для хранения ошибок (null, если ошибок нет)
  const [error, setError] = useState(null);
  // Состояние для хранения данных, полученных от сервера (null, если данных нет)
  const [data, setData] = useState(null);

  // Функция post для выполнения POST-запроса
  const post = async (body) => {
    // Устанавливаем состояние загрузки в true
    setLoading(true);
    // Сбрасываем ошибку перед новым запросом
    setError(null);

    try {
      // Получаем токен доступа из localStorage
      const token = localStorage.getItem("access_token");
      // Если токен отсутствует, выбрасываем ошибку
      if (!token) {
        throw new Error("User is not authenticated");
      }

      // Выполняем POST-запрос на указанный URL
      const response = await fetch(url, {
        method: "POST", // Метод запроса
        headers: {
          "Content-Type": "application/json", // Указываем тип содержимого
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок Authorization
        },
        body: JSON.stringify(body), // Преобразуем тело запроса в JSON
      });

      // Если ответ от сервера не успешный (статус не 2xx), выбрасываем ошибку
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Парсим ответ от сервера в формате JSON
      const result = await response.json();
      // Сохраняем полученные данные в состояние data
      setData(result);
      // Возвращаем результат для дальнейшего использования
      return result;
    } catch (err) {
      // Если произошла ошибка, сохраняем её сообщение в состояние error
      setError(err.message);
      // Логируем ошибку в консоль для отладки
      console.error("Post request error:", err);
    } finally {
      // В любом случае (успех или ошибка) сбрасываем состояние загрузки
      setLoading(false);
    }
  };

  // Возвращаем функции и состояния для использования в компонентах
  return { post, loading, error, data };
};

// Экспортируем хук для использования в других частях приложения
export default useAuthPost;
