// src/hooks/useAuthPost.jsx
import { useState } from "react";

const useAuthPost = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = async (method, url, body = null) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      console.log(token)

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: body ? JSON.stringify(body) : null
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      if (response.status !== 204) {
        const result = await response.json();
        setData(result);
        return result;
      }

      return { success: true };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const post = (body, endpoint = "") => {
    const url = endpoint ? `${baseUrl}${endpoint}` : baseUrl;
    return request("POST", url, body);
  };

  const deleteRequest = (id) => {
    const url = `${baseUrl}${id}/`;
    return request("DELETE", url);
  };

  return {
    post,
    delete: deleteRequest,
    loading,
    error,
    data
  };
};

export default useAuthPost;
