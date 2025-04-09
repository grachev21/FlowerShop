// Импорт необходимых хуков из React
import { useState, useEffect } from "react";
// Импорт axios для HTTP-запросов
import axios from "axios";

/**
 * Кастомный хук для выполнения GET-запросов с фильтрацией по категории
 * @param {string} baseUrl - Базовый URL API endpoint
 * @param {string|null} initialCategory - Начальная категория для фильтрации (опционально)
 * @returns {object} Объект с данными и методами управления запросом
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

  // Эффект, выполняющийся при изменении baseUrl или category
  useEffect(() => {
    // Асинхронная функция для выполнения запроса
    const fetchData = async () => {
      // Выходим если baseUrl не указан
      if (!baseUrl) return;

      // Устанавливаем состояние загрузки и сбрасываем ошибки
      setLoading(true);
      setError(null);

      try {
        // Формируем URL в зависимости от наличия категории
        const url = category
          ? `${baseUrl}?category_id=${category}` // URL с параметром фильтрации
          : baseUrl; // Базовый URL без фильтров

        // Выполняем GET-запрос
        const response = await axios.get(url);

        // Обновляем данные в состоянии
        setData(response.data);
      } catch (err) {
        // Обрабатываем ошибки (используем сообщение ошибки или дефолтное)
        setError(err.message || "Error fetching data");
      } finally {
        // В любом случае снимаем состояние загрузки
        setLoading(false);
      }
    };

    // Вызываем функцию запроса
    fetchData();
  }, [baseUrl, category]); // Эффект зависит от этих значений

  // Возвращаемый объект с данными и методами
  return {
    data, // Полученные данные
    loading, // Флаг загрузки (true/false)
    error, // Ошибка (если возникла)
    category, // Текущая выбранная категория
    setCategory, // Функция для изменения категории

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
