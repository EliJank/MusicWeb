import { useState } from "react";

const useFetch = (timeout = 2000) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const apiMakeCall = async (url, method = "GET", body) => {
    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    setloading(true);
    setError(null);

    // setTimeout(async () => {
      try {
        const res = await fetch(url, {
          method,
          headers,
          ...(method !== "GET" && body
            ? { body: JSON.stringify(body) }
            : {}),
        });

        const json = await res.json();
        setData(json);
        return json;
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    // }, timeout);
  };

  return { data, loading, error, apiMakeCall };
};

export default useFetch;