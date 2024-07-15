// import React, { useState } from 'react';
// import { TextField, Typography, Button, Grid } from "@mui/material";
// import { Container } from "@mui/system";
// import { Link } from "react-router-dom"; 
// import HeadDrawer from '../components/HeadDrawer';
// import useResetPassword from '../hooks/useResetPassword';
// 
// const NewPasswordPage = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { resetButtonFunc } = useResetPassword();
// 
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
// 
//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };
// 
//   const queryParameters = new URLSearchParams(window.location.search);
//   const email = queryParameters.get("email");
//   const Token = queryParameters.get("token");
// 
//  
// 
//   const handleNewPass = (e) => {
//     e.preventDefault();
//     resetButtonFunc(email, Token, password, confirmPassword);
//   };
// 
//   return (
//     <div>
//       <HeadDrawer />
//       <Container style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "80px" }}>
//         <Grid container spacing={2}>
//           <Grid item lg={3}> </Grid>
//           <Grid item lg={6} xs={12}>
//             <Grid item xs={12}>
//               <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: "100px" }}>
//                 Buat Password Baru
//               </Typography>
//               <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px" }}>
//               </Typography>
// 
//               <TextField
//                 type="password"
//                 id="outlined-basic"
//                 label="Password Baru"
//                 variant="outlined"
//                 style={{ marginTop: "50px" }}
//                 fullWidth
//                
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//               <br />
//               <TextField
//                 type="password"
//                 id="outlined-basic"
//                 label="Konfirmasi Password Baru"
//                 variant="outlined"
//                 style={{ marginTop: "20px" }}
//                 fullWidth
//                 
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//               />
//             </Grid>
// 
//             <br />
// 
//             <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
//               <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px" }}>
//                 {/* {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>} */}
//               </Typography>
//             </Grid>
// 
//             <Link to='/login'>
//               <Button variant="contained" style={{ marginTop: "30px", border: "2px solid #5D5FEF", backgroundColor: "white", color: "#5D5FEF" }}>Batal</Button>
//             </Link>
//             <Button variant="contained" style={{ marginTop: "30px", marginLeft: "30px", backgroundColor: "#5D5FEF", color: "white" }} onClick={handleNewPass}>
//               Kirim
//             </Button>
//             <br />
// 
//             <Grid style={{ display: "flex", marginTop: "30px" }} >
//               <Typography variant="body1" component="p" color="textPrimary">
//               </Typography>
//               &nbsp;
//               <Typography variant="body1" component="p" color="primary">
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }
// 
// export default NewPasswordPage;

import React, { useState } from 'react';
import { TextField, Typography, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom"; 
import HeadDrawer from '../components/HeadDrawer';
import useResetPassword from '../hooks/useResetPassword';

const NewPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { resetButtonFunc } = useResetPassword();
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const queryParameters = new URLSearchParams(window.location.search);
  const email = queryParameters.get("email");
  const Token = queryParameters.get("token");

  const handleNewPass = (e) => {
    e.preventDefault();

    const passwordRegex = /^.{8,30}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password harus memiliki minimal 8 karakter dan maksimal 30 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Password dan Konfirmasi Password tidak sama.');
      return;
    }

    resetButtonFunc(email, Token, password, confirmPassword);
  };

  return (
    <div>
      <HeadDrawer />
      <Container style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "80px" }}>
        <Grid container spacing={2}>
          <Grid item lg={3}> </Grid>
          <Grid item lg={6} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: "100px" }}>
                Buat Password Baru
              </Typography>
              <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px" }}>
              </Typography>

              <TextField
                type="password"
                id="outlined-basic"
                label="Password Baru"
                variant="outlined"
                style={{ marginTop: "50px" }}
                fullWidth
               
                value={password}
                required
                onChange={handlePasswordChange}
              />
              <br />
              <TextField
                type="password"
                id="outlined-basic"
                label="Konfirmasi Password Baru"
                variant="outlined"
                style={{ marginTop: "20px" }}
                fullWidth
                
                value={confirmPassword}
                required
                onChange={handleConfirmPasswordChange}
              />
            </Grid>

            <br />

            <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography variant="body1" component="p" color="error" style={{ marginTop: "10px" }}>
                {errorMessage}
              </Typography>
            </Grid>

            <Link to='/login'>
              <Button variant="contained" style={{ marginTop: "30px", border: "2px solid #5D5FEF", backgroundColor: "white", color: "#5D5FEF" }}>Batal</Button>
            </Link>
            
            <Button variant="contained" style={{ marginTop: "30px", marginLeft: "30px", backgroundColor: "#5D5FEF", color: "white" }} onClick={handleNewPass}>
              Kirim
            </Button>
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

export default NewPasswordPage;