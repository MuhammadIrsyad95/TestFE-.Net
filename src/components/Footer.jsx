import React from 'react';
import { Container, Grid, Typography, Stack, Skeleton, Paper } from '@mui/material';
import Kontak1 from '.././assets/kontak1.png';
import Kontak2 from '.././assets/kontak2.png';
import Kontak3 from '.././assets/kontak3.png';
import Kontak4 from '.././assets/kontak4.png';
import Kontak5 from '.././assets/kontak5.png';
import { Link } from 'react-router-dom';
import useCategoryLogin from '../hooks/useCategoryLogin';


const Footer = () => {

  const { data, loading, error } = useCategoryLogin();

  if (loading) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={210} height={118} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    
      <Container maxWidth="100%" style={{ backgroundColor: "#F2C94C", paddingBottom: '20px' }}>
        <Grid container spacing={2} style={{ maxWidth: '90%', margin: 'auto' }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">Tentang Kami</Typography>
            <Typography>
              Apel Musik: Tempat berkembang, menyatukan para pecinta musik. Kursus terbaik, mentor berpengalaman. Realisasikan bakatmu, raih prestasi! Apel Musik: Inspirasi musikalitas. Instruktur handal, kursus berkualitas. Temukan passionmu, wujudkan mimpi musikmu bersama kami! 
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          
            <Typography variant="h6" fontWeight="bold">Category</Typography>
            <Grid container spacing={2}>
                {data && data.map(menu => (
            <Grid item xs={6} lg={6} key={menu.id}>
              <Link to={`/listmenu/${menu.id}`} style={{ textDecoration: 'none' }}>
                <Paper style={{ backgroundColor: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', borderRadius: 0 }}>
                
                  <Typography >{menu.nama_kategori}</Typography>
                 
                </Paper>
               </Link>
            </Grid>
              ))}
              
            </Grid>
           
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" fontWeight="bold">Alamat</Typography>
              <Typography>
              1 Apple Park Way · Cupertino, California · Amerika Serikat · 37°205″N 122°032″W / 37.33472°N 122.00889°W / 37.33472; -122.00889. 
              </Typography>
            </Grid>
            <br/>
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight="bold">Kontak</Typography>
              <Stack spacing={2} direction="row">
                <img src={Kontak1} alt="Kontak1" width="40" height="40" />
                <img src={Kontak2} alt="Kontak2" width="40" height="40" />
                <img src={Kontak3} alt="Kontak3" width="40" height="40" />
                <img src={Kontak4} alt="Kontak4" width="40" height="40" />
                <img src={Kontak5} alt="Kontak5" width="40" height="40" />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    
  );
};

export default Footer;