import * as React from 'react';
import { Box, Container } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import HeadLanding from '../components/HeadLanding';
import Footer from "../components/Footer";
import MyClass from "../components/MyClass";
import FotoDetailKelas from '../assets/DetailKelas1.png';

 

const MyClassPage = () => {
  return (
	<>
	<HeadLanding />
	<MyClass/>
	<Footer/>
	</>
  );
}

 

export default MyClassPage;