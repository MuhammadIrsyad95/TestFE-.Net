import * as React from 'react';
import { TextField, Typography, Button, Grid} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer";
import Footer from "../components/Footer"
import HeadLanding from '../components/HeadLanding';
import Banner from '../components/Banner';



import ListPhoto1 from '../components/ListPhoto1';
import ListPhoto2 from '../components/ListPhoto2';
// import ListPhotobawahBanner from '../components/ListPhotobawahBanner';
import Header from '../components/Header';
import ListPhotobawahBannerLogin from '../components/ListPhotobawahBannerLogin';
import ListPhoto1Login from '../components/ListPhoto1Login';





const LandingPage = () => {
  return (
    
    <Box>
    <Header/>
    <ListPhotobawahBannerLogin/>
    <Footer/>
    </Box>
  )}

  export default LandingPage;