import { useState } from "react";

// Caste Hook for Authorized Post-Requires
// Accepts the URL as a parameter and returns methods for working with a request
const useAuthPost = (url) => {
  // Loading state -shows whether the request is performed at the moment
  const [loading, setLoading] = useState(false);
  // Error status -keeps an error message or null if there are no errors
  const [error, setError] = useState(null);
  // Data status -stores a successful response from the server
  const [data, setData] = useState(null);
  // The main function for performing post
  const post = async (body) => {
    setLoading(true);  // We start loading
    setError(null);    // We drop the previous errors
    try {
      // We get a jwt token from Localstorage
      const token = localStorage.getItem("token");
      // We check the presence of authentication token
      if (!token) {
        throw new Error("User is not authenticated");
      }
      // We perform a Fetch-request with authorization
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Indicate the data type
          Authorization: `Token ${token}`,    // JWT TOKEN in the header
        },
        body: JSON.stringify(body),  // We convert the object into json line
      });
      // Check the success of the HTTP Status (200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      // Parsim json response from server
      const result = await response.json();
      setData(result);  // We save the data to the state
      return result;    // Return the result for Immediate use
    } catch (err) {
      // We process errors (network, parsing, authorization, etc.)
      setError(err.message);
      console.error("Post request error:", err);
    } finally {
      // It is performed in any case -drop the load state
      setLoading(false);
    }
  };
  // Return the Hook interface for use in components
  return { post, loading, error, data };
};

export default useAuthPost;