
import * as React from 'react';
import { TextField, Typography, Button, Grid} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import HeadDrawer from "../components/HeadDrawer";
import Footer from "../components/Footer"
import HeadLanding from '../components/HeadLanding';
import Banner from '../components/Banner';




import Header from '../components/Header';

import DetailInvoice2 from '../components/DetailInvoice2';





const DetailInvoice = () => {
  return (
    
    <Box>
    <Header/>
    {/* <DetailInvoiceComponent/> */}
    <DetailInvoice2/>
    <Footer/>
    </Box>
  )}

  export default DetailInvoice;