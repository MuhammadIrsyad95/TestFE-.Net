// import Cookies from 'js-cookie';
// import { useState, useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

// const useAuth = () => {
//   const { setToken, setIsAuth } = useContext(AuthContext);

//   const checkInitialLogin = () => {
//     setIsAuth(!!Cookies.get('authToken'));
//   };

//   const loginUser = async (email, password) => {
//     try {
//       const response = await fetch('http://localhost:5124/api/Auth/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const responseData = await response.text();

//         Cookies.set('authToken', responseData, { expires: 7 });
//         setToken(responseData);
//         //localStorage.setItem('authToken', responseData); // Simpan token di localStorage
//         setIsAuth(true);

//         return true;
//       } else {
//         throw new Error('Login gagal');
//       }
//     } catch (error) {
//       console.error('Login gagal:', error);
//       return false;
//     }
//   };

//   const logoutUser = () => {
//     Cookies.remove('authToken');
//     localStorage.removeItem('authToken'); // Hapus token dari localStorage
//     setToken('');
//     setIsAuth(false);
//   };

//   return { loginUser, logoutUser, checkInitialLogin };
// };

// export default useAuth;








// //<== revisi ==========================>
// // import Cookies from 'js-cookie';
// // import { useState, useContext } from 'react';
// // import { AuthContext } from '../contexts/AuthContext';

// // const useAuth = () => {
// //   const { loginUser, setToken, setIsAuth } = useContext(AuthContext);

// //   const checkInitialLogin = () => {
// //     setIsAuth(!!Cookies.get('authToken'));
// //   };

// //   // const loginUser = async (email, password) => {
// //   //   try {
// //   //     const response = await fetch('http://localhost:5124/api/Auth/Login', {
// //   //       method: 'POST',
// //   //       headers: {
// //   //         'Content-Type': 'application/json',
// //   //       },
// //   //       body: JSON.stringify({ email, password }),
// //   //     });

// //   //     if (response.ok) {
// //   //       const responseData = await response.text();

// //   //       Cookies.set('authToken', responseData, { expires: 7 });
// //   //       setToken(responseData);
// //   //       setIsAuth(true);

// //   //       return true;
// //   //     } else {
// //   //       throw new Error('Login gagal');
// //   //     }
// //   //   } catch (error) {
// //   //     console.error('Login gagal:', error);
// //   //     return false;
// //   //   }
// //   // };

// //   const logoutUser = () => {
// //     Cookies.remove('authToken');
// //     setToken('');
// //     setIsAuth(false);
// //   };

// //   return { loginUser, logoutUser, checkInitialLogin };
// // };

// // export default useAuth;


import Cookies from 'js-cookie';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const useAuth = () => {
  const { setToken, setIsAuth, setUserRole } = useContext(AuthContext);

  const checkInitialLogin = () => {
    setIsAuth(!!Cookies.get('auth'));
  };

  const loginUser = async (email, password) => {
    try {
      const header = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/Auth/Login`, 
          { email, password }, {header}
        );

      if (response.status == 200) {
        const responseData = await response.data;

        const tokenParsing = JSON.parse(decodeURIComponent(escape(atob(response.data.split('.')[1]))));
        //console.log(tokenParsing["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);

        // Assuming the response is a JWT token

        Cookies.set('auth', true, { expires: 7 });
        setIsAuth(true);

        Cookies.set('authToken', responseData, { expires: 7 });
        setToken(responseData);

        Cookies.set('role', tokenParsing["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"], { expires: 7 });
        setUserRole(tokenParsing["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);

        //console.log(setUserRole);
        //setIsAuth(true);

        //return true;
      } else {
        throw new Error('Login gagal');
      }
    } catch (error) {
      console.error('Login gagal:', error);
      //return false;
    }
  };

  const logoutUser = () => {
    Cookies.remove('authToken');
    Cookies.remove('role'); 
    Cookies.remove('auth');

    setToken('');
    setUserRole('');
    setIsAuth(false);
  };

  return { loginUser, logoutUser, checkInitialLogin };
};

export default useAuth;