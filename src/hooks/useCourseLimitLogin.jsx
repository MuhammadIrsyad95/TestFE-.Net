import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import { AuthContext } from '../contexts/AuthContext';

const useCourseLimitLogin = () => {
  // const { token } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = `${import.meta.env.VITE_API_URL}api/Product/CourseLimits`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};

export default useCourseLimitLogin;