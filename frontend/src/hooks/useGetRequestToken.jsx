import { useEffect, useState } from "react";
import axios from "axios";

/**
 * @typedef {Object} UseGetRequestTokenResult
 * @property {Array} data - Data received from the server
 * @property {boolean} loading - Loading state flag
 * @property {Error|null} error - Error object if request failed
 */

/**
 * Custom hook for making GET requests with token-based authorization
 * @param {string} url - URL for the GET request
 * @returns {UseGetRequestTokenResult} Object containing data, loading state, and error
 */
const useGetRequestToken = (url) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Authorization token from localStorage
     * @type {string|null}
     */
    const token = localStorage.getItem("token");

    // If token is missing, abort execution
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchBasket = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBasket();
  }, [url]);

  return { data, loading, error };
};

export default useGetRequestToken;
