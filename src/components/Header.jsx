import React, { useState } from 'react';
import HeadDrawer from './HeadDrawer';
import HeadLanding from './HeadLanding';


function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false) // State untuk status login pengguna

  // Fungsi untuk melakukan login
  const handleLogin = () => setIsUserLoggedIn(true)
  

  // Fungsi untuk melakukan logout
  const handleLogout = () => setIsUserLoggedIn(false)
  

  return (
    <div className="App">
      {/* Header yang akan ditampilkan berdasarkan status login pengguna */}
      {isUserLoggedIn ? (
        <HeadDrawer onLogout={handleLogout} />
      ) : (
        <HeadLanding onLogin={handleLogin} />
      )}

      {/* Sisipkan konten utama aplikasi di sini */}
    </div>
  );
}

export default Header;