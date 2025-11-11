import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Custom hook for making GET requests with token-based authorization
 * @param {Array} data - Data received from the server
 * @param {boolean} loading - Loading state flag
 * @param {Error|null} error - Error object if request failed
 * @param {string} url - URL for the GET request
 * @returns {Objectj} - Returns an object {data, loading, error}
 */

const useGetRequestToken = (url) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

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

  return { data, loading, error};
};

export default useGetRequestToken;
