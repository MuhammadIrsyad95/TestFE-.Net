// ButtonBoxComponent.jsx
import React from 'react';
import { Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const EmailButtonBoxComponent = () => {
  return (
    <Grid item lg={12} xs={2}>
      <Box textAlign="center" marginTop="10px" marginBottom="20px">
        <Link to='/login'>
          <Button variant="contained" style={{ backgroundColor: "#5D5FEF", color: "white" }}>
            Masuk Sekarang
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default EmailButtonBoxComponent;