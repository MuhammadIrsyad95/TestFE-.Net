// MenuList.jsx
import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
const formatCurrency = (price) => {
        // Format angka ke dalam format mata uang
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
        };
const ListMenuList = ({ menus, menuDetail }) => {
  return (
    <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor: 'white' }}>
      <hr />
      <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
        <Typography variant="h6" color="#5D5FEF" fontWeight="bold" style={{ textAlign: 'center', margin: '0 auto' }}>
          Kelas yang tersedia
        </Typography>
        <br />
        <Grid container spacing={5}>
          {menus.map(menu => (
            <Grid item xs={12} sm={4} key={menu.id}>
              <Paper style={{ backgroundColor: 'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Link to={`/detailclass/${menu.idKategori}/${menu.id}`}>
                  <img src={`${import.meta.env.VITE_API_URL}product/${menu.imageUrl}`} alt="Image 1" style={{ width: '100%' }} />
                </Link>
                <br />
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#828282' }}>{menu.namaKategori}</Typography>
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>{menu.namaCourse}</Typography>
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}> {formatCurrency(menu.harga)}</Typography>
                
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ListMenuList;