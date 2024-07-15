// import React, { useState } from 'react';
// import { TextField, Typography, Button, Grid } from '@mui/material';
// import { Container } from '@mui/system';
// import { Link } from 'react-router-dom';
// import HeadDrawer from '../components/HeadDrawer';
// import useAuth from '../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const { loginUser, loading, error } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState(null); // State untuk menampilkan pesan error

//   const handleLogin = async () => {
//     const loginSuccess = await loginUser(email, password);

//     if (!loginSuccess) {
//       setLoginError('Maaf, login gagal. Silakan coba lagi.'); // Set pesan error
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const submitLogin = async (e) => {
//     e.preventDefault();

//     const loginSuccess = await loginUser(email, password);
//     if (loginSuccess) {
//       navigate('/landing');
//     } else {
//       setLoginError('Maaf, login gagal. Silakan coba lagi.'); // Set pesan error
//     }
//   };

//   return (
//     <div>
//       <HeadDrawer />
//       <Container style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '200px' }}>
//         <Grid container spacing={2}>
//           <Grid item lg={3}></Grid>
//           <Grid item lg={6}>
//             <form onSubmit={submitLogin}>
//               <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: '100px' }}>
//                 Selamat Datang Musikers!
//               </Typography>
//               <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
//                 Login dulu yuk
//               </Typography>
//               <TextField
//                 value={email}
//                 onChange={handleEmailChange}
//                 label="Masukkan Email"
//                 variant="outlined"
//                 style={{ marginTop: '20px' }}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 type="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 label="Masukkan Password"
//                 variant="outlined"
//                 style={{ marginTop: '20px' }}
//                 fullWidth
//                 required
//               />
//               <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
//                 <Link to="/forgotpass">Lupa kata sandi</Link>
//               </Typography>
//               <Button type="submit" variant="contained" style={{ marginTop: '20px', backgroundColor: '#5D5FEF', color: 'white' }}>
//                 {loading ? 'Loading...' : 'Masuk'}
//               </Button>
//               <Grid style={{ display: 'flex', marginTop: '20px' }}>
//                 <Typography variant="body1" component="p" color="textPrimary">
//                   Belum punya akun?
//                 </Typography>
//                 &nbsp;
//                 <Typography variant="body1" component="p" color="primary">
//                   <Link to="/register">Daftar disini</Link>
//                 </Typography>
//               </Grid>
//               {loginError && (
//                 <Typography variant="body1" component="p" color="error" style={{ marginTop: '10px' }}>
//                   {loginError}
//                 </Typography>
//               )}
//             </form>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState, useContext } from 'react';
import { TextField, Typography, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import HeadDrawer from '../components/HeadDrawer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const { loginUser, loading, error } = useAuth();
  const { setToken, userRole, isAuth } = useContext(AuthContext); // Access the setUserRole function
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    const loginSuccess = await loginUser(email, password);
    //console.log('aaa'+userRole);
    if (!email || !password) {
      setLoginError('Email dan password harus diisi');
      return;
    }
    
    if (!loginSuccess) {
      setLoginError('Maaf email atau password anda tidak sesuai');
      return; // Stop further execution if login fails
    }

//     
  };

  return (
    <div>
      <HeadDrawer />
      <Container style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '200px' }}>
        <Grid container spacing={2}>
          <Grid item lg={3}></Grid>
          <Grid item lg={6}>
            
              <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: '100px' }}>
                Selamat Datang Musikers!
              </Typography>
              <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
                Login dulu yuk
              </Typography>
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Masukkan Email"
                variant="outlined"
                style={{ marginTop: '20px' }}
                fullWidth
                required  // Tambahkan required di sini
              />
              <TextField
                type="password"
                value={password}
                onChange={handlePasswordChange}
                label="Masukkan Password"
                variant="outlined"
                style={{ marginTop: '20px' }}
                fullWidth
                required  // Tambahkan required di sini
              />
              <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
                <Link to="/forgotpass">Lupa kata sandi</Link>
              </Typography>
              <Button type="submit" variant="contained" onClick={submitLogin} style={{ marginTop: '20px', backgroundColor: '#5D5FEF', color: 'white' }}>
                {loading ? 'Loading...' : 'Masuk'}
              </Button>
              <Grid style={{ display: 'flex', marginTop: '20px' }}>
                <Typography variant="body1" component="p" color="textPrimary">
                  Belum punya akun?
                </Typography>
                &nbsp;
                <Typography variant="body1" component="p" color="primary">
                  <Link to="/register">Daftar disini</Link>
                </Typography>
              </Grid>
              {loginError && (
                <Typography variant="body1" component="p" color="error" style={{ marginTop: '10px' }}>
                  {loginError}
                </Typography>
              )}
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;