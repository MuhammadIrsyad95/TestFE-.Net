import React, { useState, useEffect } from 'react';
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer";
import useRegister from "../hooks/useRegister";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const {
    registerButtonFunc,
    setUserName,
    setEmail,
    setPassword,
    setConfirmPassword,
    confirmPassword,
    errorMessage,
    email,
    userName,
    password,
    setErrorMessage,
  } = useRegister();

  const [isEmailValid, setIsEmailValid] = useState(true); // State untuk status validitas email

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = newEmail && emailRegex.test(newEmail);

    setEmail(newEmail);
    setIsEmailValid(isValid);

    if (!isValid) {
      setErrorMessage('Format email tidak valid.');
    } else {
      setErrorMessage('');
    }
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || userName.trim()==='') {
    setErrorMessage('Nama tidak boleh kosong.');
    return;
    }
    // if (userName.replaceAll(' ', '').length > 0){
    //     // your submit logic here
    //     // setErrorMessage('Nama tidak boleh kosong.');
    //     alert ('Nama tidak boleh kosong bang');
    //     return;
    // }
    //   if (userName.trim() == '') {
    // setErrorMessage('Nama tidak boleh kosong.');
    // return;
    // }


    if (!isEmailValid) {
      setErrorMessage('Format email tidak valid.');
      return;
    }

    if (userName && userName.length > 30) {
      setErrorMessage('Nama maksimal 30 karakter.');
      return;
    }

    if (email && email.length > 30) {
      setErrorMessage('Email maksimal 30 karakter.');
      return;
    }

    if (password && (password.length < 8 || password.length > 30 || password !== confirmPassword)) {
      setErrorMessage('Password minimal 8 karakter, maksimal 30 karakter, dan harus sesuai dengan konfirmasi password.');
      return;
    }

    try {
      await registerButtonFunc();
    } catch (error) {
      console.error('Error during registration:', error.response?.data);
      setErrorMessage('Terjadi kesalahan saat registrasi.');
    }
  };

  useEffect(() => {
    // Update status validitas email pada perubahan email di dalam efek samping
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(email && emailRegex.test(email));
  }, [email]);

  return (
    <div>
      <HeadDrawer/>
      <Container style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom : "100px" }}>
        <Grid container spacing={2}>
          <Grid item lg={3}></Grid>
          <Grid item lg={6} xs={12}>
            <RegisterForm
              userName={userName}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              onChange={(field) => (e) => {
                switch (field) {
                  case 'userName':
                    setUserName(e.target.value);
                    break;
                  case 'email':
                    handleEmailChange(e); // Memanggil fungsi handleEmailChange saat email berubah
                    break;
                  case 'password':
                    setPassword(e.target.value);
                    break;
                  case 'confirmPassword':
                    setConfirmPassword(e.target.value);
                    break;
                  default:
                    break;
                }
              }}
              onSubmit={handleRegister}
            />

            {/* Tampilkan pesan kesalahan dari useRegister */}
            {errorMessage && (
              <Typography variant="body1" component="p" color="error" style={{ marginTop: "10px"}}>
                {errorMessage}
              </Typography>
            )}

            <Grid container spacing={0}>
              <Grid item lg={4} xs={6}>
                <Typography variant="body1" component="p" color="textPrimary" style={{marginTop: "10px"}}>
                  Sudah punya akun?
                </Typography>
              </Grid>
              <Grid item lg={2} xs={6}>
                <Typography variant="body1" component="p" color="primary" style={{marginTop: "10px"}}>
                  <Link to='/login'>Login disini</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RegisterPage;