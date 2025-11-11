import { useState } from "react";
import axios from "axios";

const useRequestPutAuth = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async ({ body, id = null }) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const token = localStorage.getItem("token");

      // Формируем URL: если передан id, добавляем его к baseUrl
      const url = id ? `${baseUrl}${id}/` : baseUrl;

      const response = await axios.put(url, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      setData(response.data);
      return response.data;
    } catch (err) {
      console.error("Request error:", err);

      // Обрабатываем ошибки axios
      const errorMessage = err.response?.data
        ? typeof err.response.data === "object"
          ? JSON.stringify(err.response.data)
          : err.response.data
        : err.message;

      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    error,
    data,
  };
};

export default useRequestPutAuth;



