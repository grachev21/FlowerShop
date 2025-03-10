import { useState, useEffect } from "react";
import axios from "axios";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние аутентификации
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Отправляем GET-запрос на эндпоинт проверки аутентификации
        const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`, // Используем токен из localStorage
          },
        });

        // Если запрос успешен, пользователь аутентифицирован
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        // Если запрос завершился ошибкой, пользователь не аутентифицирован
        setError(err.response ? err.response.data : "An error occurred");
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    checkAuth(); // Вызываем функцию проверки аутентификации
  }, []);

  return { isAuthenticated, loading, error };
};

export default useAuthCheck;
