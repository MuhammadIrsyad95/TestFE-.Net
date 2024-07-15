import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ListMenuBanner = ({ menuDetail }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={12}>
        <Paper style={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'start', borderRadius: 0 }}>
          <img
            src={`${import.meta.env.VITE_API_URL}category/${menuDetail.imageUrl}`}
            alt={menuDetail.namaKategori}
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ListMenuBanner;