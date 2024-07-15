import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const useOrder = () => {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/InvoiceUser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching invoice data:', error);
      setError('There was an error while fetching invoice data. Please try again.');
      setLoading(false);
    }
  };

  const fetchDetailInvoice = async (orderId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/DetailInvoice/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      //console.log('Response from API:', response.data); // Add this line to verify the API response
      return response.data;
    } catch (error) {
      console.log(`Error fetching detail invoice for order ID ${orderId}:`, error);
      setError('Error fetching detail invoice. Please try again.');
      setLoading(false);
      return null;
    }
  };

  const fetchDetailItem = async (orderId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/DetailInvoiceItem/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      //console.log('Response from API:', response.data); // Add this line to verify the API response
      return response.data;
    } catch (error) {
      console.log(`Error fetching detail invoice for order ID ${orderId}:`, error);
      setError('Error fetching detail invoice. Please try again.');
      setLoading(false);
      return null;
    }
  };

  const fetchMyclass = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/Mycalss`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      //console.log('Response from API:', response.data); // Add this line to verify the API response
      return response.data;
    } catch (error) {
      console.log(`Error fetching detail invoice for order ID ${orderId}:`, error);
      setError('Error fetching detail invoice. Please try again.');
      setLoading(false);
      return null;
    }
  };

  const fetchAllInvoice = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/InvoiceAllUser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      //console.log('Response from API:', response.data); // Add this line to verify the API response
      return response.data;
    } catch (error) {
      console.log(`Error fetching detail invoice for order ID ${orderId}:`, error);
      setError('Error fetching detail invoice. Please try again.');
      setLoading(false);
      return null;
    }
  };

  const fetchAllDetailInvoice = async (orderId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Order/DetailInvoice/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      //console.log('Response from API:', response.data); // Add this line to verify the API response
      return response.data;
    } catch (error) {
      console.log(`Error fetching detail invoice for order ID ${orderId}:`, error);
      setError('Error fetching detail invoice. Please try again.');
      setLoading(false);
      return null;
    }
  };




  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  return { data, loading, error, fetchDetailInvoice, fetchDetailItem, fetchMyclass, fetchAllInvoice };
};

export default useOrder;
