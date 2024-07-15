// CourseForm.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useCourse from '../../hooks/useCourse';
import useCategory from '../../hooks/useCategory';

export default function CourseForm({ initialValues }) {
  const { id, name, image, description, price, categories } = initialValues || {};

  const { data, loading, error } = useCategory();
  const [formData, setFormData] = React.useState({
    name: name || '',
    image: null,
    description: description || '',
    price: price || '',
    categories: categories || '' 
  });
  const [alert, setAlert] = React.useState(false);
  const [errors, setErrors] = React.useState({
    name: '',
    description: '',
    price: '',
    categories: '',
    image: '',
  });
  const fileInputRef = React.useRef(null);
  const { handlePostData, handleUpdateData } = useCourse(); // Initialize API functions

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      description: '',
      price: '',
      categories: '',
      image: '',
    };

    // Validasi Nama
    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = 'Nama tidak boleh kosong';
    } else if (formData.name.length > 50) {
      isValid = false;
      newErrors.name = 'Nama tidak boleh lebih dari 50 karakter';
    }

    // Validasi Deskripsi
    if (!formData.description.trim()) {
      isValid = false;
      newErrors.description = 'Deskripsi tidak boleh kosong';
    } else if (formData.description.length > 200) {
      isValid = false;
      newErrors.description = 'Deskripsi tidak boleh lebih dari 200 karakter';
    }

    // Validasi Harga
    if (!formData.price) {
      isValid = false;
      newErrors.price = 'Harga tidak boleh kosong';
    } else if (isNaN(parseFloat(formData.price))) {
      isValid = false;
      newErrors.price = 'Harga harus berupa angka';
    }


    // Validasi Kategori
    if (!formData.categories.trim()) {
      isValid = false;
      newErrors.categories = 'Pilih kategori';
    }

    // Validasi Gambar
    if (!formData.image) {
      isValid = false;
      newErrors.image = 'Pilih gambar';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form sebelum pengiriman
    const isValidForm = validateForm();

    if (!isValidForm) {
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('nama_produk', formData.name);
    formDataToSend.append('deskripsi_produk', formData.description);
    formDataToSend.append('harga', formData.price);
    formDataToSend.append('imageUrl', formData.image);
    formDataToSend.append('kategori_id', formData.categories);

    if (id) {
      formDataToSend.append('id', id);
      try {
        // For update operation
        await handleUpdateData(id, formDataToSend);
        setAlert(true);
      } catch (error) {
        console.error('Update Error:', error);
      }
    } else {
      try {
        // For post operation
        await handlePostData(formDataToSend);
        setAlert(true);
      } catch (error) {
        console.error('Post Error:', error);
      }
    }

    setFormData({
      name: '',
      image: null,
      description: '',
      price: '',
      categories: ''
    });
    fileInputRef.current.value = '';
    //window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Hapus pesan kesalahan setiap kali nilai berubah
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

    if (name === 'image') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0]
      }));
    } else if (name === 'price' && !isNaN(value)) {
      // Hanya update nilai harga jika input adalah angka
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name !== 'price') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
            label="Name"
            variant="filled"
            fullWidth
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextareaAutosize
            name="description"
            value={formData.description}
            onChange={handleChange}
            aria-label="minimum height"
            minRows={3}
            placeholder="Description"
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />
          {errors.description && (
            <div style={{ color: 'red' }}>{errors.description}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="price"
            value={formData.price}
            onChange={handleChange}
            label="Price"
            variant="filled"
            fullWidth
            error={!!errors.price}
            helperText={errors.price}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <label htmlFor="categories">Choose a category : </label>
          <select
            name="categories"
            id="categories"
            style={{
              border: '1px solid grey',
              borderRadius: '5%',
              padding: '5px'
            }}
            value={formData.categories} // Tentukan nilai yang dipilih
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                categories: e.target.value
              }))
            }
          >
            <option value="" disabled>Pilih kategori</option>
            {data &&
              data.map((kategori) => (
                <option key={kategori.id} value={kategori.id}>
                  {kategori.nama_kategori}
                </option>
              ))}
          </select>
          {errors.categories && (
            <div style={{ color: 'red' }}>{errors.categories}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <label>Choose an image : </label>
          <input
            ref={fileInputRef}
            accept="image/*"
            type="file"
            name="image"
            onChange={handleChange}
          />
          {errors.image && (
            <div style={{ color: 'red' }}>{errors.image}</div>
          )}
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button type="submit" variant="outlined" style={{ marginBottom: '20px' }} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={alert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Data Berhasil Diinputkan
        </Alert>
      </Snackbar>
    </Box>
  );
}