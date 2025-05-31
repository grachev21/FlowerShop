import { useState, useEffect } from "react";
import axios from "axios";

const useGetIdRequest = (baseUrl, initialCategory = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(initialCategory);
  const [paramName, setParamName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!baseUrl || !paramName) return; // Проверка paramName
      setLoading(true);
      setError(null);
      try {
        const url = category
          ? `${baseUrl}?${paramName}_id=${category}`
          : baseUrl;

        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [baseUrl, category, paramName]); // Добавлен paramName в зависимости
  return {
    data, // Полученные данные
    loading, // Флаг загрузки (true/false)
    error, // Ошибка (если возникла)
    category, // Текущая выбранная категория
    setCategory, // Функция для изменения категории
    setParamName,
    paramName,
    refetch: () => {
      setData([]);
      setCategory(category);
    },
  };
};

export default useGetIdRequest;
