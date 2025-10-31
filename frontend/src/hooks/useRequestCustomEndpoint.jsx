import { useState } from "react";

const useRequestCutsomEndpoint = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (productId, flag) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      if (!productId) {
        throw new Error("Product ID is required");
      }

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
          product: productId,
          flag: flag,
        })
      });


      if (!response.ok) {
        // Получаем детальную ошибку от сервера
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);

      return result;

    } catch (err) {
      console.error("Minus product error:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    error,
    data
  };
};

export default useRequestCutsomEndpoint;
