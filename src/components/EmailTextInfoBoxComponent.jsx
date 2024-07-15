import React from 'react';
import { Grid, Box, Typography } from "@mui/material";

const EmailTextInfoBoxComponent = () => {
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
        <Typography variant="h5" component="h4" color="#5D5FEF">
          Konfirmasi Email Berhasil
        </Typography>
        <Typography variant="body1" component="p" color="textPrimary">
          Silahkan Login terlebih dahulu untuk masuk ke aplikasi
        </Typography>
      </Box>
    </Grid>
  );
};

export default EmailTextInfoBoxComponent;