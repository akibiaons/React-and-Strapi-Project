import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        try {
          const res = await fetch(url);
          const json = await res.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error); // Set error state if fetch fails
          setLoading(false); // Make sure to reset loading state even in case of error
          console.log(error); // Log the error message to the console
        }
      };
  
      fetchData();
    }, [url]);
  
    return { loading, error, data };
  };

  export default useFetch;