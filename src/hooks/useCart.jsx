import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const useCart = () => {
  const { token } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [error, setError] = useState('');

  const fetchCartData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Cart/CartUser`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartData(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      setError('Error fetching cart data. Please try again.');
    }
  };

  const fetchSpecificCartData = async (idCourse, schedule) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Cart/SpecificCart/${idCourse}/${schedule}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartData(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart data:', error);
      setError('Error fetching cart data. Please try again.');
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      fetchCartData();
    }
  }, [token]);

  const handleCart = async (produkIds, schedule) => {
    try {
      const cartPay = {
        produkIds: [produkIds],
        schedule: schedule,
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/Cart`, cartPay, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart successful!', response.data);
      // Additional logic after successful cart operation
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.errors) {
        console.error('Validation errors during cart operation:', error.response.data.errors);
      } else {
        console.error('Error during cart operation:', error);
      }
    }
  };

  return { cartData, error, handleCart, fetchSpecificCartData };
};

export default useCart;
