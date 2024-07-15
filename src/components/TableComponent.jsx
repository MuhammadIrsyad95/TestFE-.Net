import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableComponent() {
  return (
    <Container>
    
        <Grid Container spacing ={4} sx = {{marginTop : '100px'}}>
                            <Grid item lg ={12} xs= {12}>
                                <Stack direction='row'>
                                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'light', color: 'black', marginBottom: '20px',  }}>
                                Beranda
                                <span style={{ marginLeft: '10px' }}>&gt;</span>
                                </Typography>
                                       
                                <Typography Typography variant="body2" style={{ marginLeft: '10px',display: 'flex', alignItems: 'center', fontWeight: 'light', color: '#5D5FEF', marginBottom: '20px' }}>
                                          Invoice
                                </Typography>
                                </Stack>
                            </Grid>
                    </Grid>


                    <Grid Container spacing ={4} sx = {{marginTop : '10px'}}>
                            <Grid item lg ={12} xs= {4}>
                            <Typography Typography variant="body1" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
                                         Invoice
                                </Typography>

                            </Grid>
                    </Grid>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,  marginBottom :'200px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No </TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>   
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}