import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Custom hook for making GET requests with category filtering
// @param {string} baseUrl - The base URL for API requests
// @param {string} paramName - The parameter name for filtering (e.g., 'category', 'product')
// @param {string|number|null} initialCategory - Initial category value, defaults to null
const useGetIdRequest = (baseUrl, paramName, initialCategory = null) => {
  // State for storing fetched data
  const [data, setData] = useState([]);
  // State for loading status
  const [loading, setLoading] = useState(false);
  // State for error handling
  const [error, setError] = useState(null);
  // State for current selected category
  const [category, setCategory] = useState(initialCategory);

  // Memoized fetch function to prevent unnecessary recreations
  const fetchData = useCallback(async () => {
    // Validate required parameters before making request
    if (!baseUrl || !paramName) {
      console.warn("Missing baseUrl or paramName, skipping request");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Reset any previous errors

    try {
      // Construct URL with category filter if provided
      const url = category ? `${baseUrl}?${paramName}_id=${category}` : baseUrl;


      // Execute GET request using axios
      const response = await axios.get(url);

      // Update state with received data
      setData(response.data);
    } catch (err) {
      // Handle request errors gracefully
      const errorMessage = err.response?.data?.message || err.message || "Error fetching data";
      setError(errorMessage);
      console.error("API Request failed:", errorMessage);
    } finally {
      // Always stop loading regardless of success/failure
      setLoading(false);
    }
  }, [baseUrl, paramName, category]); // Dependencies for the fetch function

  // Effect to trigger data fetching when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData is memoized, so this effect runs only when dependencies change

  // Memoized category update function to prevent unnecessary re-renders
  const updateCategory = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  // Function to manually refetch data without changing category
  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  // Return state and methods for component usage
  return {
    data, // Array of fetched data
    loading, // Boolean indicating if request is in progress
    error, // Error message if request failed, null otherwise
    category, // Current selected category filter
    setCategory: updateCategory, // Function to update category filter
    refetch, // Function to manually trigger data refetch
  };
};

export default useGetIdRequest;
