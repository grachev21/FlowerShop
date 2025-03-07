import axios from "axios";

// Экспортируем асинхронную функцию logout
export const logout = async () => {
  try {
    // Отправляем POST-запрос на сервер для выполнения выхода из системы
    await axios.post("http://127.0.0.1:8000/auth/token/logout/", null, {
      headers: {
        // Передаем токен авторизации в заголовке запроса
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    });
  } catch (error) {
    // Если произошла ошибка при выполнении запроса, выводим сообщение об ошибке в консоль
    console.error("Logout failed", error);
  } finally {
    // В любом случае (успешно или с ошибкой) удаляем токен авторизации из localStorage
    localStorage.removeItem("auth_token");
  }
};
