import React, { useContext, useState } from 'react';
import { TextField, Typography, Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import HeadDrawer from '../../components/HeadDrawer';
import { AuthContext } from '../../contexts/AuthContext';

const LoginAdminPage = () => {
  
  const {loginUser} = useContext(AuthContext);

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const delay = ms => new Promise(res => setTimeout(res, ms));

    const validateEmail = async () => {
        await delay(1000)
    }

    const login = async () => {
        await delay(1000)
    }
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Mengubah nilai password saat input berubah
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Mengubah nilai password saat input berubah
  };
  const submitLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout (()=>{
      setLoading(false);
      loginUser("randomtoken")
    },1000);
    
  };

  const handleResetPassword = () => {
    // value dipassing ke console
    console.log('Email Anda:', email);
    console.log('Password Anda:', password);
  };

  
  return (
    <div>
      <HeadDrawer />
      <Container style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '200px' }}>
        <Grid container spacing={2}>
          <Grid item lg={3}></Grid>
          <Grid item lg={6}>
            <form onSubmit={submitLogin}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: '100px' }}>
                  Selamat Datang Admin
                </Typography>
                <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
                  Silahkan Login
                </Typography>

                <TextField
                  
                  id="outlined-basic"
                  value={email}
                  onChange={handleEmailChange}
                  label="Masukkan Email"
                  variant="outlined"
                  style={{ marginTop: '50px' }}
                  fullWidth
                  
                  required
                />
                <br />
                <TextField
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  id="outlined-basic"
                  label="Masukkan Password"
                  variant="outlined"
                  style={{ marginTop: '20px' }}
                  fullWidth
                  
                  required
                />
              </Grid>

              <br />

              {/* <Grid style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '10px' }}>
                  <Link to="/forgotpass">Lupa kata sandi</Link>
                </Typography>
              </Grid> */}
              <Link to = '/landing'>
              <Button type="submit" variant="contained" style={{ marginTop: '30px', backgroundColor: '#5D5FEF', color: 'white' }
              } onClick={handleResetPassword}>
                Masuk
              </Button>
              </Link>
              <br />
            </form>

            {/* <Grid style={{ display: 'flex', marginTop: '30px' }}>
              <Typography variant="body1" component="p" color="textPrimary">
                Belum punya akun?
              </Typography>
              &nbsp;
              <Typography variant="body1" component="p" color="primary">
                <Link to="/register">Daftar disini</Link>
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginAdminPage;