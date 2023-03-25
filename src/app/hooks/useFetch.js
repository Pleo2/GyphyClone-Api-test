import { useEffect, useState } from 'react';

export default function useFetch(API_URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
      fetch(API_URL, { signal: abortController.signal })
        .then((response) => response.json())
        .then((json) => {
          const { data } = json;
          setData(data)
        })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, [API_URL]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  };

  return { data, setData, loading, error, handleCancelRequest };
}

