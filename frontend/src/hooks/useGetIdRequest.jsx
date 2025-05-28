import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Кастомный хук для выполнения GET-запросов с фильтрацией по категории
 * @param {string} baseUrl - Базовый URL API endpoint
 * @param {string|null} initialCategory - Начальная категория для фильтрации (опционально)
 * @returns {object} Объект с данными и методами управления запросом
 *
 * @data  Полученные данные
 * @loading Флаг загрузки (true/false)
 * @error Ошибка (если возникла)
 * @category  Текущая выбранная категория
 * @setCategory Функция для изменения категории
 */

const useGetIdRequest = (baseUrl, initialCategory = null) => {
  // The state for storing the received data
  const [data, setData] = useState([]);
  // Status for tracking the loading process
  const [loading, setLoading] = useState(false);
  // Store for storage of request errors
  const [error, setError] = useState(null);
  // The state of the current selected category
  const [category, setCategory] = useState(initialCategory);
  const [paramName, setParamName] = useState(null);

  // The effect performed with the change in Baseurl or Category
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
        console.log(url)
        setData(response.data);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, category, paramName]); // Добавлен paramName в зависимости

  // Возвращаемый объект с данными и методами
  return {
    data, // Полученные данные
    loading, // Флаг загрузки (true/false)
    error, // Ошибка (если возникла)
    category, // Текущая выбранная категория
    setCategory, // Функция для изменения категории
    setParamName,
    paramName,

    // Функция для принудительного обновления данных
    refetch: () => {
      // Сбрасываем данные
      setData([]);
      // Устанавливаем текущую категорию (вызывает повторный запрос)
      setCategory(category);
    },
  };
};

export default useGetIdRequest;
