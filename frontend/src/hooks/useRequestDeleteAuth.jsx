// src/hooks/useDeleteAuth.js
import { useState } from "react";

const useRequestDeleteAuth = (baseUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const deleteItem = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      if (!id) {
        throw new Error("ID is required for deletion");
      }


      const response = await fetch(`${baseUrl}${id}/`, {
        method: "DELETE",
        headers: {
          "Authorization": `Token ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // DELETE usually returns 204 No Content
      const result = { success: true, message: "Item deleted successfully" };
      setData(result);

      return result;

    } catch (err) {
      console.error("Delete error:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    delete: deleteItem,
    loading,
    error,
    data
  };
};

export default useRequestDeleteAuth;
