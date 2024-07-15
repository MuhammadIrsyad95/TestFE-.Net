import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useUser from '../../hooks/useUser';

export default function UserForm({ initialValues }) {
  const { id, name, email, password, status } = initialValues || {};
  const [formData, setFormData] = React.useState({
    name: name || '',
    email: email || '',
    password: password || '',
    repassword: '', // Add this line
  });
  const [alert, setAlert] = React.useState(false);
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    password: '',
    repassword: '', // Add this line
  });
  const [serverError, setServerError] = React.useState(null);

  const fileInputRef = React.useRef(null);
  
  const { handlePostData, handleUpdateData, validateExistingEmail } = useUser();

  const validateForm = async () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      password: '',
      repassword: '', // Add this line
    };

    // Validasi Nama
    if (!formData.name) {
      isValid = false;
      newErrors.name = 'Nama tidak boleh kosong';
    } else if (formData.name.length > 30) {
      isValid = false;
      newErrors.name = 'Nama maksimal 30 karakter';
    } else {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      if (specialCharRegex.test(formData.name)) {
        isValid = false;
        newErrors.name = 'Nama tidak boleh mengandung karakter spesial';
      }
    }

    // Validasi Email
    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email tidak boleh kosong';
    } else if (formData.email.length > 30) {
      isValid = false;
      newErrors.email = 'Email maksimal 30 karakter';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        isValid = false;
        newErrors.email = 'Format email tidak valid';
      } else {
        // Pengecekan email sudah terdaftar atau belum
        try {
          const isEmailNotRegistered = await validateExistingEmail(formData.email);
          if (!isEmailNotRegistered) {
            isValid = false;
            newErrors.email = 'Email sudah terdaftar';
          }
        } catch (error) {
          console.error('Error checking email:', error);
          // Handle error appropriately
        }
      }
    }

    // Validasi Password
    if (!formData.password) {
      isValid = false;
      newErrors.password = 'Password tidak boleh kosong';
    } else if (formData.password.length < 8 || formData.password.length > 30) {
      isValid = false;
      newErrors.password = 'Password harus antara 8 hingga 30 karakter';
    }

    // Validasi Konfirmasi Password
    if (!formData.repassword) {
      isValid = false;
      newErrors.repassword = 'Konfirmasi password tidak boleh kosong';
    } else if (formData.repassword !== formData.password) {
      isValid = false;
      newErrors.repassword = 'Konfirmasi password harus sama dengan password';
    }

    setErrors(newErrors);
    return isValid;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      repassword: '',
    });
  };

  //const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Validate the form
    const isValidForm = await validateForm();

    if (!isValidForm) {
      return;
    }

    setServerError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('nama', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('repassword', formData.repassword);

    if (id) {
      formDataToSend.append('id', id);
      try {
        await handleUpdateData(id, formDataToSend);
        setAlert(true);
        resetForm();
        fetchData(); // Refetch data after a successful update
      } catch (error) {
        console.error('Update Error:', error);
        setServerError(error.message);
      }
    } else {
      try {
        await handlePostData(formDataToSend);
        setAlert(true);
        resetForm();
        fetchData(); // Refetch data after a successful post
      } catch (error) {
        console.error('Post Error:', error);
        setServerError(error.message);
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    console.log('Submitting form...');
    //window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Nama"
            variant="filled"
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            variant="filled"
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="password"
            onChange={handleChange}
            label="Password"
            variant="filled"
            fullWidth
            type="password"
            error={!!errors.password}
            helperText={errors.password}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="repassword"
            onChange={handleChange}
            label="Konfirmasi Password"
            variant="filled"
            fullWidth
            type="password"
            error={!!errors.repassword}
            helperText={errors.repassword}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="outlined" style={{ marginBottom: '20px' }} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
      {serverError && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          {serverError}
        </Alert>
      )}
      <Snackbar
        open={alert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Data Berhasil Diinputkan
        </Alert>
      </Snackbar>
    </Box>
  );
}
