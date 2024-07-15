import * as React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import useOrder from '../hooks/useOrder';

export default function Invoice2() {
  const { data, error } = useOrder();

  const newData = data?.map((invoice, index) => ({
    id: invoice.id,
    number: index + 1,
    noInvoice: invoice.noInvoice,
    tanggalBeli: invoice.tanggalBeli,
    jumlahKursus: invoice.jumlahKursus,
    totalHarga: `Rp ${invoice.totalHarga.toLocaleString('id-ID')}`,
  })) || [];

  const columns = [
    { field: 'number', headerName: 'No', width: 70, headerClassName: 'header-bold' },
    { field: 'noInvoice', headerName: 'No. Invoice', width: 200, headerClassName: 'header-bold' },
    { field: 'tanggalBeli', headerName: 'Tanggal Beli', width: 200, headerClassName: 'header-bold' },
    { field: 'jumlahKursus', headerName: 'Jumlah Kursus', width: 200, headerClassName: 'header-bold' },
    { field: 'totalHarga', headerName: 'Total Harga', width: 200, headerClassName: 'header-bold' },
    {
      field: 'id',
      headerName: 'Action',
      width: 150,
      headerClassName: 'header-bold',
      sortable: false,
      renderCell: (params) => (
        <Link to={`/detailinvoice/${params.row.id}`}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#5D5FEF" }}
            >
              Rincian
            </Button>
        </Link>
      ),

    },
  ];
  
  return (
    <Container>
      <Grid Container spacing={4} sx={{ marginTop: '100px' }}>
        <Grid item lg={12} xs={12}>
          <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'light', color: 'black', marginBottom: '20px' }}>
            <Link to="/landing" style={{textDecoration : 'none', color : 'black'}}>Beranda</Link>
            <span style={{ marginLeft: '10px' }}>&gt;</span>
            <span style={{ marginLeft: '10px', fontWeight: 'light', color: '#5D5FEF' }}>Invoice</span>
          </Typography>
          {/* <Typography variant="body2" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', fontWeight: 'light', color: '#5D5FEF', marginBottom: '20px' }}>
            Invoice
          </Typography> */}
        </Grid>
      </Grid>

      <Grid Container spacing={4} sx={{ marginTop: '10px' }}>
        <Grid item lg={12} xs={4}>
          <Typography variant="body1" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
            Invoice
          </Typography>
        </Grid>
      </Grid>

      <Box style={{ width: '100%', marginTop: '20px', marginBottom: '100px' }}>
        <div style={{ height: 350, width: '100%', marginBottom: '200px' }}>
          <DataGrid rows={newData} columns={columns} />
        </div>
      </Box>
    </Container>
  );
}
