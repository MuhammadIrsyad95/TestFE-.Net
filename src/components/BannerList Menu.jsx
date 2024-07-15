import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import BanImage from '../assets/drumbanner.png'; // Pastikan path ke gambar banner benar





const BannerListMenu = () => {
  return (
          <>
          <Grid container spacing ={2} style ={{marginTop : '50px'}}>
          <Grid item xs={12} lg={12}>
          <img src= {BanImage} alt="Image 1" style={{ width: '100%' }} />
        

                {/* <Box
                sx={{
                        background: `url(${BanImage}) center/cover no-repeat`, // Jadikan gambar sebagai background
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '50vh', // Sesuaikan tinggi sesuai kebutuhan
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: { xs: 'flex', md: 'flex' }
                        
                }}
                >
                </Box> */}
                </Grid>
             </Grid>   
         </>
    
    
  );
}

export default BannerListMenu;