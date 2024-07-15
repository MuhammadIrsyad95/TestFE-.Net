// ImageBoxComponent.jsx
import React from 'react';
import { Grid, Box } from "@mui/material";
import emailPage from '.././assets/EmailPage.png';

const EmailImageBoxComponent = () => {
  return (
    <Grid item lg={12} xs={2}>
      <Box
        textAlign="center"
        marginTop="10px"
        marginBottom="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={emailPage} alt="emailPage" style={{ marginTop: '15%' }} />
      </Box>
    </Grid>
  );
};

export default EmailImageBoxComponent;