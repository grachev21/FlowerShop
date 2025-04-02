import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false); // Состояние для отслеживания загрузки
  const [error, setError] = useState(null); // Состояние для хранения ошибок
  const [success, setSuccess] = useState(false); // Состояние для отслеживания успешной авторизации
  const [token, setToken] = useState(null); // Состояние для хранения токена
  const navigate = useNavigate();

  const login = async (credentials) => {
    setLoading(true); // Начинаем загрузку
    setError(null); // Сбрасываем ошибки
    setSuccess(false); // Сбрасываем состояние успеха

    try {
      // Отправляем POST-запрос на эндпоинт авторизации Djoser
      const response = await axios.post("http://127.0.0.1:8000/auth/token/login/", credentials);

      // Если запрос успешен
      const authToken = response.data.auth_token; // Получаем токен из ответа
      setToken(authToken); // Сохраняем токен в состоянии
      localStorage.setItem("token", authToken); // Сохраняем токен в localStorage
      setSuccess(true); // Устанавливаем состояние успеха
      navigate("/");
      navigate(0);
      return response.data; // Возвращаем данные ответа (например, токен)
    } catch (err) {
      // Обрабатываем ошибку
      setError(err.response ? err.response.data : "An error occurred");
    } finally {
      setLoading(false); // Завершаем загрузку
    }
  };

  return { login, loading, error, success, token };
};

export default useLogin;
