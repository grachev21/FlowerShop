// src/hooks/useRequestPostAuth.jsx
import { useState } from "react";

/**
 * Custom hook for post request with token-based authorization
 * @param {string} baseUrl - Url for POST request
 * @returns {Object} - {post, loading, error, data}
 * @returns {function} post - Function for post request, accepts an object - (body)
 * @returns {Array} data - Data received from the server
 * @returns {boolean} loading - Loading state flag
 * @returns {Error|null} error - Error object if request failed
 */
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
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body), 
      });

      if (!response.ok) {
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
    data,
  };
};

export default useRequestPostAuth;
