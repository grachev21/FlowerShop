import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      // Отправляем POST-запрос на эндпоинт разлогинивания Djoser
      await axios.post("http://127.0.0.1:8000/auth/token/logout/", null, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`, // Используем токен из localStorage
        },
      });
    } catch (err) {
      console.error("Logout error:", err.response ? err.response.data : err);
    } finally {
      // Удаляем токен из localStorage
      localStorage.removeItem("token");

      // Перенаправляем пользователя на страницу входа
      navigate("/login");
    }
  };

  return { logout };
};

export default useLogout;
