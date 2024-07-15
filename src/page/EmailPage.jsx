import React from 'react';
import { Container, Grid } from "@mui/material";
// import EmailAppBarComponent from '../components/EmailAppBarComponent';
import HeadDrawer from "../components/HeadDrawer";
import EmailImageBoxComponent from '../components/EmailImageBoxComponent';
import EmailTextInfoBoxComponent from '../components/EmailTextInfoBoxComponent';
import EmailButtonBoxComponent from '../components/EmailButtonBoxComponent';


const EmailPage = () => {
  return (
    <div id="log">
      <HeadDrawer />
      <Container style={{ display: "flex", flexDirection: "column", gap: "0px", marginBottom: "200px" }}>
        {/* <EmailAppBarComponent /> */}
        <EmailImageBoxComponent />
        <EmailTextInfoBoxComponent />
        <EmailButtonBoxComponent/>
        <Grid item lg={3} xs={2}></Grid>
      </Container>
    </div>
  );
};

export default EmailPage;