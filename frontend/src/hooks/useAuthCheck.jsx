import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to check user authentication status
const useAuthCheck = () => {
  // State to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // State to track loading status during auth check
  const [loading, setLoading] = useState(true);
  // State to store any errors that might occur
  const [error, setError] = useState(null);

  // Effect hook to run authentication check when component mounts
  useEffect(() => {
    // Async function to verify user authentication
    const checkAuth = async () => {
      try {
        // Make GET request to authentication endpoint
        const response = await axios.get(
          "http://127.0.0.1:8000/auth/users/me/",
          {
            headers: {
              // Include auth token from localStorage in request headers
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          },
        );

        // If response status is 200, user is authenticated
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        // If error occurs, set error details
        setError(err.response ? err.response.data : "An error occurred");
        // Mark user as not authenticated
        setIsAuthenticated(false);
      } finally {
        // Regardless of success/failure, set loading to false
        setLoading(false);
      }
    };

    // Execute the authentication check
    checkAuth();
  }, []); // Empty dependency array means this runs only once on mount

  // Return authentication status and related states
  return { isAuthenticated, loading, error };
};

export default useAuthCheck;
