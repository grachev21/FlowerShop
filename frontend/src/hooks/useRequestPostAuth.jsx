// src/hooks/useRequestPostAuth.jsx
import { useState } from "react";

const useRequestPostAuth = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify(body) // ✅ FIXED: Convert to JSON string
      });


      if (!response.ok) {
        // Get detailed error message
        const errorText = await response.text();
        console.error("Server error:", errorText);
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      if (response.status !== 204) {
        const result = await response.json();
        setData(result);
        return result;
      }

      return { success: true };
    } catch (err) {
      console.error("Request error:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    post,
    loading,
    error,
    data
  };
};

export default useRequestPostAuth;
