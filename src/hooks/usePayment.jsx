import { useState, useEffect } from 'react';
import axios from 'axios';

const usePayment = () => {
  // const apiUrl = "http://52.237.194.35:2024/api/Menu/GetMenuLimit"; // URL yang digunakan dalam custom hook
  const apiUrl = `${import.meta.env.VITE_API_URL}api/Payment`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl); // Menggunakan apiUrl yang telah ditentukan
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

  useEffect(() => {

    fetchData();
    
  }, [apiUrl]); // Menggunakan apiUrl sebagai dependency dalam useEffect

  const handlePostData = async (formData) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/Payment`, formData);
      fetchData();
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleUpdateData = async (id, formData) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}api/Payment/${id}`, formData);
      fetchData();
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { data, loading, error, handlePostData, handleUpdateData };
};

export default usePayment;