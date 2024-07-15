import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DetailKelasImage = ({ menuDetail, handleRefresh }) => {
  // Ambil elemen pertama dari array products
  
  return (
    <Paper style={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginBottom: '5px', borderRadius: 0 }}>
      <br />
      
        <Grid container spacing={4}>
          <Grid item xs={6} lg={4} >
            <Paper style={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'start', borderRadius: 0 }}>
              
                <img src={`${import.meta.env.VITE_API_URL}product/${menuDetail.imageUrl}`} alt={menuDetail.namaKategori} style={{ Maxwidth: '200%' }} />
                
              
            </Paper>
          </Grid>
        </Grid>
      
    </Paper>
  );
};

export default DetailKelasImage;