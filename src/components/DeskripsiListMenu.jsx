import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import BanImage from '../assets/drumbanner.png'; // Pastikan path ke gambar banner benar

const DeskripsiListMenu = () => {
  return (
        <>



                <Container>
                <Box sx ={{backgroundColor:'#fff', boxShadow: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', borderRadius: 0}} >
                        <Grid container spacing={6}>
                                <Grid item lg={12} xs={12}>
                                <Typography variant="h4" component="h4" color="secondary" style={{ fontWeight: 'bold',color : '#000000', marginTop : '60px', marginBottom : '30px',marginLeft: '20px'}}>
                                Drummer Class
                                </Typography>
                                <Typography variant="body1" component="h4" color="textPrimary" style={{ fontSize: '16px',marginTop :'0px', marginBottom : '30px',marginLeft: '20px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                </Grid>
                        </Grid>
                </Box>
                </Container>
                </>
  )
}
export default DeskripsiListMenu