// // AuthContext.jsx
// import React, { createContext, useState, useEffect } from 'react';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('authToken') || '');
//   const [isAuth, setIsAuth] = useState(!!localStorage.getItem('authToken')); // Atur isAuth berdasarkan apakah token ada di localStorage

//   const loginUser = (receivedToken) => {
//     setToken(receivedToken);
//     localStorage.setItem('authToken', receivedToken);
//     setIsAuth(true);
//   };

//   const logoutUser = () => {
//     localStorage.removeItem('authToken');
//     setToken('');
//     setIsAuth(false);
//   };

//   // Mengecek status otentikasi saat pertama kali me-render
//   useEffect(() => {
//     setIsAuth(!!localStorage.getItem('authToken'));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, setToken: loginUser, isAuth, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from 'react';
// import Cookies from 'js-cookie';

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(Cookies.get('authToken') || '');
//   const [isAuth, setIsAuth] = useState(!!Cookies.get('authToken'));

//   const loginUser = (receivedToken) => {
//     setToken(receivedToken);
//     Cookies.set('authToken', receivedToken, { expires: 1 }); // Setelah login, simpan token dalam cookie dengan masa berlaku 7 hari
//     setIsAuth(true);
//   };

//   const logoutUser = () => {
//     Cookies.remove('authToken');
//     setToken('');
//     setIsAuth(false);
//   };

//   useEffect(() => {
//     setIsAuth(!!Cookies.get('authToken'));
//   }, []);

//   return (
//     <AuthContext.Provider value={{ token, setToken: loginUser, isAuth, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(Cookies.get('authToken') || '');
  const [userRole, setUserRole] = useState(Cookies.get('role')); // Add userRole state
  const [isAuth, setIsAuth] = useState(!!Cookies.get('auth'));
  //console.log('Role Cookie Valued:', userRole);
  const loginUser = (receivedToken) => {
    setToken(receivedToken);
    setUserRole(''); // Set an initial empty user role
    Cookies.set('authToken', receivedToken, { expires: 1 });
    setIsAuth(true);
  };

  const logoutUser = () => {
    Cookies.remove('authToken');
    Cookies.remove('role'); 
    Cookies.remove('auth');
    setToken('');
    setUserRole(''); // Reset user role on logout
    setIsAuth(false);
  };

  useEffect(() => {
    setIsAuth(!!Cookies.get('authToken'));
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken: loginUser, setUserRole, userRole, isAuth, setIsAuth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};