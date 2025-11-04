import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @property {boolean} isAuthenticated - User authentication flag
 * @property {boolean} loading - Authentication check load flag
 * @property {string|null} error - Error message if verification fails
 */

/**
 * Custom hook for checking user authentication
 * Checks the validity of the token via an API request
 */

const useAuthCheck = () => {
  // User authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Load state of authentication check
  const [loading, setLoading] = useState(true);
  // Error status when checking authentication
  const [error, setError] = useState(null);

  // Effect to perform authentication check when mounting a component
  useEffect(() => {
    // Asynchronous authentication function via API
    const checkAuth = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");
        // If there is no token, immediately exit with an error
        if (!token) {
          setIsAuthenticated(false);
          setError("Токен не найден");
          return;
        }

        // Response from the server upon successful authentication
        const response = await axios.get("http://127.0.0.1:8000/auth/users/me/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });
        // Successful response (status 200) means valid authentication
        if (response.status === 200) {
          setIsAuthenticated(true);
          setError(null);
        }
      } catch (err) {
        // Handle request errors
        const axiosError = err;
        // Extract the error message from the server response or use the general one
        const errorMessage = axiosError.response
          ? axiosError.response.data
          : "Произошла ошибка при проверке аутентификации";

        setError(errorMessage);
        setIsAuthenticated(false);
      } finally {
        // Always remove the loading flag after the check is completed
        setLoading(false);
      }
    };

    // Perform authentication check
    checkAuth();
  }, []); // Empty dependency array - effect only occurs when mounted

  return {
    isAuthenticated,
    loading,
    error,
  };
};

export default useAuthCheck;
