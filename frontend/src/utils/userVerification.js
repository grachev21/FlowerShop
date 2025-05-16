import axios from "axios";

export const userVerification = async () => {
  // Получаем токен аутентификации из localStorage
  const token = localStorage.getItem("auth_token");
  // Если токен отсутствует, возвращаем false, так как пользователь не аутентифицирован
  if (!token) {
    console.log("false");
    return false;
  }
  try {
    // Выполняем GET-запрос к эндпоинту аутентификации с использованием
    // токена в заголовке Authorization
    const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    // Если запрос успешен, возвращаем true, так как пользователь аутентифицирован
    console.log("true");
    return true;
  } catch (error) {
    // Если произошла ошибка при выполнении запроса, выводим сообщение об ошибке в консоль
    console.error("Authentication check failed", error);
    // Возвращаем false, так как проверка аутентификации не удалась
    return false;
  }
};