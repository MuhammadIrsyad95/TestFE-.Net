// AppBarComponent.jsx
import React from 'react';
import { Container, AppBar, Toolbar } from "@mui/material";
import Logo from '.././assets/Logo.png';
import HeadDrawer from "../components/HeadDrawer";

const EmailAppBarComponent = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt="Logo" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default EmailAppBarComponent;
