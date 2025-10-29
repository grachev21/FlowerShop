import { useState } from "react";
import axios from "axios";

const useDeleteAxios = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async ({ id }) => {
    console.log(id);
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      const fullUrl = id ? `${url}${id}/` : url;
      console.log(fullUrl);

      const response = await axios.delete(fullUrl, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      return response.data; // Возвращаем данные ответа (если есть)
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || err.response?.data?.message || err.message || "Ошибка при удалении";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

export default useDeleteAxios;
