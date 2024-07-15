import * as React from 'react';
import { TextField, Typography, Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer";
import Footer from "../components/Footer"
import HeadLanding from '../components/HeadLanding';
import Banner from '../components/Banner';

import ListPhotobawahBannerLogin from '../components/ListPhotobawahBannerLogin';


import ListPhoto2 from '../components/ListPhoto2';
import Header from '../components/Header';
import ListPhoto1Login from '../components/ListPhoto1Login';





const LandingPageHome = () => {
  return (

    <Box>
      <HeadDrawer/>
      <ListPhotobawahBannerLogin />
      <Footer />
    </Box>
  )
}

export default LandingPageHome;