// MenuDetail.jsx
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const ListMenuDetail = ({ namaCategory, deskripsi }) => {
  return (
    <Container>
    
      <Box sx={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', borderRadius: 0 }}>
        <Grid container spacing ={2}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4" component="h1" color="secondary" style={{ fontWeight: 'bold', color: '#000000', marginTop: '60px', marginBottom: '30px', marginLeft: '20px' }}>
          {namaCategory}
        </Typography>
        </Grid>
        
         <Grid item xs={12} sm={12}>
        <Typography variant="body2" component="body2" color="textPrimary" style={{ fontSize: '16px', marginTop: '0px', marginBottom: '30px', marginLeft: '20px' }}>
          {deskripsi}
        </Typography>
        </Grid>
        
        </Grid>
      </Box>
    </Container>
  );
};

export default ListMenuDetail;