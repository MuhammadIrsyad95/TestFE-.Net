// RegisterForm.js

// import React from 'react';
// import { Typography, TextField, Button, Grid } from "@mui/material";
// 
// const RegisterForm = ({ userName, email, password, confirmPassword, onChange, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <Grid item xs={12}>
//         <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: "50px" }}>
//           Selamat Datang Musikers !
//         </Typography>
//         <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px"}}>
//           Yuk daftar terlebih dahulu akun kamu
//         </Typography>
//         <TextField id="outlined-basic" value={userName} onChange={onChange('userName')} label="Masukkan Nama Lengkap" variant="outlined" style={{ marginTop: "50px"}} fullWidth id="fullWidth" required />
//         <TextField id="outlined-basic" value={email} onChange={onChange('email')} label="Masukkan Email" variant="outlined" style={{ marginTop: "20px"}} fullWidth id="fullWidth" required/>
//         <TextField type="password" id="outlined-basic" value={password} onChange={onChange('password')} label="Masukkan Password" variant="outlined" style={{ marginTop: "20px"}} fullWidth id="fullWidth" required/>
//         <TextField type="password" id="outlined-basic" value={confirmPassword} onChange={onChange('confirmPassword')} label="Konfirmasi Password" variant="outlined" style={{ marginTop: "20px"}} fullWidth id="fullWidth" required/>
//       </Grid>
//       <br />
//       <Grid style={{ display: "flex", marginTop: "30px", marginBottom: "30px" }}>
//         <Grid item lg={2} style={{ marginRight: "30px"}}>
//           <Button type="submit" variant="contained" style={{ backgroundColor: "#5D5FEF", color: "white" }}>
//             Daftar
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }
// 
// export default RegisterForm;

// RegisterForm.js
import React from 'react';
import { Typography, TextField, Button, Grid } from "@mui/material";

const RegisterForm = ({ userName, email, password, confirmPassword, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h4" color="textPrimary" style={{ marginTop: "50px" }}>
          Selamat Datang Musikers !
        </Typography>
        <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: "10px"}}>
          Yuk daftar terlebih dahulu akun kamu
        </Typography>
        <TextField
          id="outlined-basic"
          value={userName}
          onChange={onChange('userName')}
          label="Masukkan Nama Lengkap"
          variant="outlined"
          style={{ marginTop: "50px"}}
          fullWidth
          //id="fullWidth"
          required
          inputProps={{ maxLength: 30 }} // Menambahkan atribut maxLength untuk membatasi panjang input
        />
        <TextField
          id="outlined-basic"
          value={email}
          onChange={onChange('email')}
          label="Masukkan Email"
          variant="outlined"
          style={{ marginTop: "20px"}}
          fullWidth
          //id="fullWidth"
          required
          inputProps={{ maxLength: 30 }} // Menambahkan atribut maxLength untuk membatasi panjang input
        />
        <TextField
          type="password"
          id="outlined-basic"
          value={password}
          onChange={onChange('password')}
          label="Masukkan Password"
          variant="outlined"
          style={{ marginTop: "20px"}}
          fullWidth
          //id="fullWidth"
          required
          inputProps={{ maxLength: 30 }} // Menambahkan atribut maxLength untuk membatasi panjang input
        />
        <TextField
          type="password"
          id="outlined-basic"
          value={confirmPassword}
          onChange={onChange('confirmPassword')}
          label="Konfirmasi Password"
          variant="outlined"
          style={{ marginTop: "20px"}}
          fullWidth
          //id="fullWidth"
          required
          inputProps={{ maxLength: 30 }} // Menambahkan atribut maxLength untuk membatasi panjang input
        />
      </Grid>
      <br />
      <Grid style={{ display: "flex", marginTop: "30px", marginBottom: "30px" }}>
        <Grid item lg={2} style={{ marginRight: "30px"}}>
          <Button type="submit" variant="contained" style={{ backgroundColor: "#5D5FEF", color: "white" }}>
            Daftar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterForm;

