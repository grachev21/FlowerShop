import { useState } from "react";

const useAuthPost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw new Error("User is not authenticated");
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      console.error("Post request error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error, data };
};

export default useAuthPost;
