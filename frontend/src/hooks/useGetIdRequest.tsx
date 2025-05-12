// Импорт необходимых хуков из React
import { useState, useEffect } from "react";
// Импорт axios для HTTP-запросов
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
  // Состояние для хранения полученных данных
  const [data, setData] = useState([]);

  // Состояние для отслеживания процесса загрузки
  const [loading, setLoading] = useState(false);

  // Состояние для хранения ошибок запроса
  const [error, setError] = useState(null);

  // Состояние текущей выбранной категории
  const [category, setCategory] = useState(initialCategory);

  const [paramName, setParamName] = useState(null);

  // Эффект, выполняющийся при изменении baseUrl или category
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

  // Возвращаемый объект с данными и методами
  return {
    data, // Полученные данные
    loading, // Флаг загрузки (true/false)
    error, // Ошибка (если возникла)
    category, // Текущая выбранная категория
    setCategory, // Функция для изменения категории
    setParamName,

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
