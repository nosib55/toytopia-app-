import axios from "axios";
import { useEffect, useState } from "react";

const useToysData = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("/Toys.json") 
      .then(data =>setToys(data.data)).catch(err => setError(err))
        .finally(() => setLoading(false));
  }, []);

  return { toys, loading, error };
};

export default useToysData;
