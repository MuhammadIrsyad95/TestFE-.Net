import React from 'react';
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Foto1 from '.././assets/drum1.png'
import Foto2 from '.././assets/drum2.png'
import Foto3 from '.././assets/drum3.png'
import Foto4 from '.././assets/drum4.png'



export default function KelasTersedia ({judul, namaKelas, keteranganKelas, hargaKelas}){
        return (
            <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor:'white' }}>
    <hr/>
        <Container maxWidth="lg" style={{paddingTop:'50px', paddingBottom:'60px'}} >
        <Typography variant="h6" color="#5D5FEF" fontWeight="bold" style={{ textAlign: 'center', margin: '0 auto' }}>
                {judul}
        </Typography>
        <br/>
        <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                <Link to ='/detailclass' style={{textDecoration: 'none' }}>
                <Paper style={{ backgroundColor:'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={Foto1} alt="Image 1" style={{ width: '100%' }} />
                <br/>
                <Grid item xs={6} lg ={4}>
          <Paper style={{ backgroundColor:'#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'start',borderRadius: 0 }}>
            <Link to ='/detailclass' style={{textDecoration: 'none' }} ><img src= {`data:image/png;base64,${product.image}`} alt={product.type_name} style={{ width: '100%' }} /></Link>
            <br/>
            <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'lighter', color: '#828282'}}>{product.type_name}</Typography>
            <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#333', marginBottom : '20px'}} >{product.title}</Typography>
            <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#5D5FEF', marginBottom : '20px' }}>IDR {product.price}</Typography>
          </Paper>
        </Grid>
                </Paper>
                </Link>
                </Grid>
                
                
                
        </Grid>
        </Container>
        </Box>    
        )
}