import axios from "axios";
import { useEffect, useState } from "react";

const useToysData = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_URL}/toys`)
      .then((res) => setToys(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { toys, loading, error };
};

export default useToysData;
