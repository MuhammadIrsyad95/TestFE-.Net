// DetailKelasSimilarProducts.jsx
import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const formatCurrency = (price) => {
  // Format angka ke dalam format mata uang
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};
const DetailKelasSimilarProducts = ({ products, menuDetail, handleRefresh }) => (
  <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor: '#fff' }}>
    <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
      <Typography variant="h6" style={{ textAlign: 'center', margin: '0 auto', fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
        Kelas lain yang mungkin kamu suka
      </Typography>
      <br />
      <Grid container spacing={4}>
        {products && products.map((product) => (
          <Grid item xs={6} lg={4} key={product.id}>
            <Paper style={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'start', borderRadius: 0 }}>
              <Link to={`/detailclass/${menuDetail.idKategori}/${product.id}`} onClick={handleRefresh} style={{ textDecoration: 'none' }}>
                <img src={`${import.meta.env.VITE_API_URL}product/${product.imageUrl}`} alt={product.namaKategori} style={{ width: '100%' }} />
                <br />
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#828282' }}>
                  {product.namaKategori}
                </Typography>
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                  {product.namaCourse}
                </Typography>
                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
                   {formatCurrency(product.harga)}
                </Typography>
               
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default DetailKelasSimilarProducts;