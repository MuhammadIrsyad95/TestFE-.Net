import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const useListMenuData = (menuName) => {
  const [menuDetail, setMenuDetail] = useState([]);
  const [menus, setMenus] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    // const apiUrlProductCourse = `${import.meta.env.VITE_API_URL}api/Product/Course/36`;
    // const apiUrlProductCourseByCategory = `${import.meta.env.VITE_API_URL}api/Product/CourseByCategory/14`;


    const apiUrlCategoryCourse = `${import.meta.env.VITE_API_URL}api/Category/${menuName}`;
    const apiUrlProductCourseByCategory = `${import.meta.env.VITE_API_URL}api/Product/CourseByCategory/${menuName}`;

    const getMenuDetail = async () => {
      try {
        const res = await axios.get(apiUrlCategoryCourse);
        setMenuDetail(res.data);
      } catch (error) {
        console.error('Error fetching menu detail:', error);
      }
    };

    const getMenus = async () => {
      try {
        const res = await axios.get(apiUrlProductCourseByCategory);
        setMenus(res.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    getMenuDetail();
    getMenus();
  }, [menuName]);

  return { menuDetail, menus };
};

export default useListMenuData;