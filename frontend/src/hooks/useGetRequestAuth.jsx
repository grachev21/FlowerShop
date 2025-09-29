import { useEffect, useState } from "react";
import axios from "axios";

const useUserBasket = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

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

export default useUserBasket;
