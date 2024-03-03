import { useEffect, useState } from "react";
import { fetchData } from "../api";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [url]);

  return [data, error, isLoading];
};

export default useFetch;
