import * as React from 'react';
import { TextField, Typography, Button, Grid, Box} from "@mui/material";
import { Container, Stack } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Logo from '.././assets/Logo.png'
import emailPage from '.././assets/EmailPage.png'
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer"
import Header from '../components/Header';
import Logo1 from '.././assets/Vector.png';
import Logo2 from '.././assets/arrow_forward.png';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

        

const SuccessPurchase = () => {

        return (
                <>
                   
                {/* <AppBar position="statis" style = {{backgroundColor :'white', }}>
                <Container maxWidth="xl">
                <Toolbar disableGutters>
                <img src={Logo} alt="Logo" />
                </Toolbar>
                </Container>
                </AppBar> */}
                <Header/> 

                <Container style={{ display: "flex", flexDirection: "column", gap: "0px", marginBottom : "200px"  }}>

                {/* <Grid container spacing={2} item lg={12} > */}
                
                <Grid Container spacing ={4}>
                <Grid item lg={6} xs={2} >
                <Box
                        textAlign="center" 
                // Mengatur teks ke tengah secara horizontal
                        marginTop="10px"
                        marginBottom="20px"
                        display="flex" // Mengatur konten di dalam Box menjadi berbasis flex
                        flexDirection="column" // Mengatur konten menjadi berbasis column
                        alignItems="center" // Mengatur teks ke tengah secara vertikal
                        justifyContent="center"

                >
                <img src={emailPage} alt="emailPage" style = {{marginTop:'15%'}} />
                </Box>
                </Grid>
                
                <Box
                        textAlign="center" 
                // Mengatur teks ke tengah secara horizontal
                        marginTop="10px"
                        marginBottom="20px"
                        display="flex" // Mengatur konten di dalam Box menjadi berbasis flex
                        flexDirection="column" // Mengatur konten menjadi berbasis column
                        alignItems="center" // Mengatur teks ke tengah secara vertikal
                        justifyContent="center"

                >
                <Typography variant="h5" component="h4" color="#5D5FEF" >Pembelian Berhasil</Typography>
                
                <Typography variant="body1" component="p" color="textPrimary" style ={{marginTop : '20px'}}> Yey! Kamu telah berhasil membeli kursus di Apel Music</Typography>
                
                <Grid item lg={12} xs={2} sx ={{marginTop : '50px'}}>
                
                <Stack  spacing={4} direction = "row" >

                <Link to = '/landing' >
                <Button  variant="outlined"  sx={{ width: '100%', marginRight: '50px' }}  style={{fontWeight: 'bold', backgroundColor: 'white', color: '#5D5FEF', outlineColor : '5D5FEF' }} fullWidth>
                <Grid container spacing ={2}>
                <Grid item xs ={12} lg = {12}>
                       {<img
                        src={Logo1}
                        alt="Logo"
                        // Gunakan media query di sini untuk menyembunyikan elemen pada layar dengan lebar maksimum 1080px                 
                        />} 
                             Ke Beranda
                </Grid>
                </Grid>
                 
                
                </Button> 
                </Link> 

                <Link to = '/invoice'>
                <Button variant="contained"  sx={{ width: '100%',marginRight: '50px' }}  style={{fontWeight: 'bold',backgroundColor: "#5D5FEF", color: "white"}} fullWidth>
                <Grid container spacing ={2}>
                <Grid item sx ={12} lg = {12} >
                       {<img
                        src={Logo2}
                        alt="Logo2"
                        // Gunakan media query di sini untuk menyembunyikan elemen pada layar dengan lebar maksimum 1080px                 
                        /> }
                        Buka Invoice
                          
                </Grid>
                </Grid>
                
                </Button> 
                </Link>
                
                </Stack>
                {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                Send
                </Button> */}
                </Grid>
                </Box>
              
                </Grid>
                
                </Container>
                
                </>
                )
        }

 

 

export default SuccessPurchase;