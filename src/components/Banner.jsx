import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Bann from '../assets/banner.png'; // Pastikan path ke gambar banner benar

const Banner = () => {
  return (
    <Box
      sx={{
        background: `url(${Bann}) center/cover no-repeat`, // Jadikan gambar sebagai background
        // height: '100vh', // Sesuaikan tinggi sesuai kebutuhan
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: '250px',
        fontFamily: 'Poppins, sans-serif', // Add Poppins font
      }}
    >
      <Container>
        <Grid container spacing={6} sx={{ marginBottom: '50px' }}>
          <Grid item lg={12} xs={12}>
            <Typography
              variant="h3"
              component="h4"
              color="textPrimary"
              style={{
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Hi Musiker! Gabung yuk di Apel Music
            </Typography>
          </Grid>

          <Grid item lg={12} xs={12}>
            <Typography
              variant="h6"
              component="h6"
              color="textPrimary"
              style={{ textAlign: 'center', color: 'white' }}
            >
              Banyak kelas keren yang bisa menunjang bakat bermusik kamu
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item lg={4} xs={12}>
            <Paper
              elevation={12}
              sx={{
                width: '100%',
                textAlign: 'center',
                justifyContent: 'space-between',
                padding: '48px',
              }}
            >
              <Typography
                variant="h3"
                component="h4"
                color="secondary"
                style={{ fontSize: '48px' }}
              >
                500+
              </Typography>
              <Typography
                variant="body1"
                component="h4"
                color="textPrimary"
                style={{ fontSize: '16px', marginTop: '20px' }}
              >
                Lebih dari sekedar kelas biasa yang bisa mengeluarkan bakat kalian
              </Typography>
            </Paper>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Paper
              elevation={12}
              sx={{ width: '100%', textAlign: 'center', padding: '60px' }}
            >
              <Typography
                variant="h3"
                component="h4"
                color="secondary"
                style={{ fontSize: '48px' }}
              >
                50+
              </Typography>
              <Typography
                variant="body1"
                component="h4"
                color="textPrimary"
                style={{ fontSize: '16px', marginTop: '20px' }}
              >
                Lulusan yang menjadi musisi ternama dengan skill memukau
              </Typography>
            </Paper>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Paper
              elevation={12}
              sx={{ width: '100%', textAlign: 'center', padding: '60px' }}
            >
              <Typography
                variant="h3"
                component="h4"
                color="secondary"
                style={{ fontSize: '48px' }}
              >
                10+
              </Typography>
              <Typography
                variant="body1"
                component="h4"
                color="textPrimary"
                style={{ fontSize: '16px', marginTop: '20px' }}
              >
                Coach Special kolaborasi dengan musisi terkenal
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;