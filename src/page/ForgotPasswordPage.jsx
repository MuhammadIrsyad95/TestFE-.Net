import React, { useState } from 'react';
import { TextField, Typography, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer";
import useForgot from '../hooks/useForgot';

const ForgotPasswordPage = () => {
    const { email, setEmail, forgotButtonFunc } = useForgot();

    const handleForgotSubmit = (e) => {
    e.preventDefault();
    forgotButtonFunc();
    };

  
  // const [email, setEmail] = useState(''); // State untuk email

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value); // Mengubah nilai email saat input berubah
  // };

  // const handleResetPassword = () => {
  //   // value dipassing ke console
  //   console.log('Email untuk reset password:', email);
  // };

  return (
    <div>
      <HeadDrawer />
      <Container style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "80px" }}>
        <Grid container spacing={2}>
          <Grid item lg={3}> </Grid>
          <Grid item lg={6} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: "100px" }}>
                Reset Password
              </Typography>
              <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px" }}>
                Silahkan masukkan terlebih dahulu email Anda
              </Typography>

                <TextField
                id="outlined-basic"
                label="Masukkan Email"
                variant="outlined"
                style={{ marginTop: "50px" }}
                fullWidth
                // id="fullWidth"
                value={email} // Nilai dari state email
                onChange={(e) => setEmail(e.target.value)} // Panggil fungsi handleEmailChange saat input berubah
              />
            </Grid>

            <br />

            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px" }}>
              </Typography>
            </Grid>

            <Link to='/login'>
              <Button variant="contained" style={{ marginTop: "30px", border: "2px solid #5D5FEF", backgroundColor: "white", color: "#5D5FEF" }}>Batal</Button>
            </Link>
            <Link to='/newpass'>
              <Button variant="contained" style={{ marginTop: "30px", marginLeft: "20px", backgroundColor: "#5D5FEF", color: "white" }} onClick={handleForgotSubmit}>
                Konfirmasi
              </Button>
            </Link>
            <br />

            <Grid style={{ display: "flex", marginTop: "30px" }} >
              <Typography variant="body1" component="p" color="textPrimary">
              </Typography>
              &nbsp;
              <Typography variant="body1" component="p" color="primary">
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ForgotPasswordPage;