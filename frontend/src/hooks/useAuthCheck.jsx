import { useState, useEffect } from "react";
import axios from "axios";

const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            "Content-Type": "application/json",  // Indicate the data type
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setError(err.response ? err.response.data : "An error occurred");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, loading, error };
};

export default useAuthCheck;
