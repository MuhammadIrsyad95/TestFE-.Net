import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Foto1 from '.././assets/drum1.png'
import Foto2 from '.././assets/drum2.png'
import Foto3 from '.././assets/drum3.png'
import Foto4 from '.././assets/drum4.png'
import { Link } from 'react-router-dom';
import KelasTersedia from './KelasTersedia';

const Konten2ListMenu = () => {

  return (
    <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor:'white' }}>
    <hr/>
    <Container maxWidth="lg" style={{paddingTop:'50px', paddingBottom:'60px'}} >
      <Typography variant="h6" color="#5D5FEF" fontWeight="bold" style={{ textAlign: 'center', margin: '0 auto' }}>
        Kelas yang tersedia

      </Typography>
                <br/>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={4}>
                  <Link to ='/detailclass' style={{textDecoration: 'none' }}>
                    <Paper style={{ backgroundColor:'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <img src={Foto1} alt="Image 1" style={{ width: '100%' }} />
                      <br/>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'lighter', color: '#828282'}}>Drum</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#333', marginBottom : '20px'}} >Kursus Drummer Special Coach (Eno Netral)</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#5D5FEF', marginBottom : '20px' }}>IDR 8.500.000</Typography>
                    </Paper>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor:'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <img src={Foto2} alt="Image 2" style={{ width: '100%' }} />
                      <br/>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'lighter', color: '#828282'}}>Drum</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#333', marginBottom : '20px'}} >Expert Level Drummer Lessons</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#5D5FEF', marginBottom : '20px' }}>IDR 5.450.000</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor:'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <img src={Foto3} alt="Image 3" style={{ width: '100%' }} />
                      <br/>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'lighter', color: '#828282'}}>Drum</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#333', marginBottom : '20px'}} >From Zero to Professional Drummer (Complit Package)</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#5D5FEF', marginBottom : '20px' }}>IDR 13.000.000</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Paper style={{ backgroundColor:'white', boxShadow: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <img src={Foto4} alt="Image 4" style={{ width: '100%' }} />
                      <br/>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'lighter', color: '#828282'}}>Drum</Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#333', marginBottom : '20px'}} >Drummer for kids (Level Basic/1)
                       </Typography>
                      <Typography variant="body2" component="p" color="textPrimary" style={{fontWeight: 'bold', color: '#5D5FEF', marginBottom : '20px' }}>IDR 2.200.000
                    </Typography>
                    </Paper>
                  </Grid>
                  
                </Grid>
    </Container>
    </Box>
  );
}

export default Konten2ListMenu;