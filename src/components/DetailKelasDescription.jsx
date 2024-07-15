// DetailKelasDescription.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const DetailKelasDescription = ({ menuDetail }) => (
  <Box sx={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'start', borderRadius: 0 }}>
    <Grid container spacing={6}>
      <Grid item lg={12} xs={12}>
        <Typography variant="h5" component="h4" color="secondary" style={{ fontWeight: 'bold', color: '#000000', marginTop: '60px', marginBottom: '30px', marginLeft: '10px' }}>
          Deskripsi
        </Typography>
        <Typography variant="body1" component="h4" color="textPrimary" style={{ fontSize: '16px', marginTop: '0px', marginBottom: '20px', marginLeft: '10px' }}>
          {menuDetail.deskripsi}
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default DetailKelasDescription;