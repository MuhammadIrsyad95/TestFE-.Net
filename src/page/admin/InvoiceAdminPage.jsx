import * as React from 'react';
import { TextField, Typography, Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer"
import HeadLanding from '../../components/HeadLanding';
import Banner from '../../components/Banner';


import ListPhotobawahBanner from '../../components/ListPhotobawahBanner';
import ListPhoto1 from '../../components/ListPhoto1';
import ListPhoto2 from '../../components/ListPhoto2';
import Header from '../../components/Header';
//admin
import HeadAdmin from '../../components/admin/HeadAdmin';
import InvoiceAdmin from '../../components/admin/InvoiceAdmin';




const InvoiceAdminPage = () => {
  return (

    <Box>
      <HeadAdmin />
      <InvoiceAdmin/>
      <Footer />
    </Box>
  )
}

export default InvoiceAdminPage;