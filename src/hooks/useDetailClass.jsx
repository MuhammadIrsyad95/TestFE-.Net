import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useDetailClass = (idKategori, idCourse) => {
  const [menuDetail, setMenuDetail] = useState({});
  const [products, setProducts] = useState([]);

  const apiUrlMenuDetail = `${import.meta.env.VITE_API_URL}api/Product/Course/${idCourse}`;
  const apiUrlProductbyCategory = `${import.meta.env.VITE_API_URL}api/Product/CourseByCategory/${idKategori}`;

  useEffect(() => {
    const getMenuDetail = async () => {
      try {
        const res = await axios.get(apiUrlMenuDetail);
        setMenuDetail(res.data);
        console.log('api data 1 ' + res.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        console.log('Response:', error.response);
      }
    };

    getMenuDetail();
  }, [idCourse]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(apiUrlProductbyCategory);
        console.log(apiUrlProductbyCategory);

        // Filter out the product with the same id as idKategori
        const filteredProducts = res.data.filter(product => product.id !== Number(idCourse));
        setProducts(filteredProducts);
        console.log('api data 2' + res.data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    getProducts();
  }, [idKategori, idCourse]);

  return { menuDetail, products };
};

export default useDetailClass;