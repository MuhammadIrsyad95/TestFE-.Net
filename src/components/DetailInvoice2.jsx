import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Modal from '@mui/material/Modal';

import useOrder from '../hooks/useOrder';



export default function DetailInvoice2() {
  const { orderId } = useParams();
  const { loading, error, fetchDetailInvoice, fetchDetailItem } = useOrder();

  const [detailData, setDetailData] = useState(null);
  const [detailDataItem, setDetailDataItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (orderId) {
        try {
          const data = await fetchDetailInvoice(orderId);
          setDetailData(data);
          console.log("Response from API:", data); // Periksa respons dari API
        } catch (error) {
          console.error('Error fetching detail invoice:', error);
        }
      }
    };
    fetchData();
  }, [orderId]);

  useEffect(() => {
    const fetchData2 = async () => {
      if (orderId) {
        try {
          const data = await fetchDetailItem(orderId);
          setDetailDataItem(data);
          console.log("Response from API:", data); // Periksa respons dari API
        } catch (error) {
          console.error('Error fetching detail invoice:', error);
        }
      }
    };
    fetchData2();
  }, [orderId]);

  console.log("Detail Data:", detailData); // Periksa detailData di sini sebelum digunakan di bawah.

  // if (detailData && Array.isArray(detailData) && detailData.length > 0) {
  //   console.log("Detail ID:", detailDataItem[0]?.namaCourse);
  // }

  const newData = detailDataItem?.map((invoiceItem, index) => ({
    id: index, // For example, using the index as the ID (ensure it's unique)
    number: index + 1,
    namaCourse: invoiceItem.namaCourse,
    namaKategori: invoiceItem.namaKategori,
    schedule: invoiceItem.schedule,
    harga: `Rp ${invoiceItem.harga.toLocaleString('id-ID')}`,
  })) || [];


  const newColumns = [
  	{ field: 'number', headerName: 'No', width: 70, headerStyle: { fontWeight: 'bold'} },
    { field: 'namaCourse', headerName: 'Nama Course', width: 200, headerStyle: { fontWeight: 'bold'}},
    { field: 'namaKategori', headerName: 'Kategori', width: 200, headerStyle: { fontWeight: 'bold'} },
    { field: 'schedule', headerName: 'Jadwal', width: 200, headerStyle: { fontWeight: 'bold'} },
    { field: 'harga', headerName: 'Harga', width: 200 , headerStyle: { fontWeight: 'bold'}},
   
  ];

        // const newData = [
        //         { id: 1, 'No': 1, 'Nama Course': 'Drum', 'Kategori': 'Drum of Liberation', 'Jadwal': '12 Juni 2022', 'Harga': 'IDR 11.500.000' },
        //         
        //         ];

	//modal
	const style = {
	  position: 'absolute',
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)',
	  width: 400,
	  bgcolor: 'background.paper',
	  border: '1px solid #000',
	  boxShadow: 24,
	  p: 4,
	};

	  const [open, setOpen] = React.useState(false);
	  const handleOpen = () => setOpen(true);
	  const handleClose = () => setOpen(false);
	//end modal

  

  return (
        <Container>
         <Grid Container spacing ={4} sx = {{marginTop : '100px'}}>
                 <Grid item lg ={12} xs= {12}>
                    <Stack direction='row'>
                    <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'light', color: 'black', marginBottom: '20px',  }}>
                    <Link to="/landing" style = {{textDecoration : 'none', color : 'black'}}>Beranda</Link>
                    <span style={{ marginLeft: '10px' }}>&gt;</span>
                    </Typography>
                                         
                    <Typography Typography variant="body2" style={{ marginLeft: '10px',display: 'flex', alignItems: 'center', fontWeight: 'light', color: 'black', marginBottom: '20px' }}>
                            <Link to="/invoice" style = {{textDecoration : 'none', color : 'black'}}>Invoice</Link>
                     </Typography>
                    <span style={{ marginLeft: '10px' }}>&gt;</span>
                    <Typography Typography variant="body2" style={{ marginLeft: '10px',display: 'flex', alignItems: 'center', fontWeight: 'light', color: '#5D5FEF', marginBottom: '20px' }}>
                                            Detail Invoice
                    </Typography>
                    </Stack>
                </Grid>
        </Grid>
                    
        <Grid Container spacing ={6} sx = {{marginTop : '10px', marginBottom: '20px' }}>
          <Grid item lg ={12} xs= {4}>                 
              <Typography Typography variant="body1" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
                Rincian Invoice
              </Typography>
                                    
              <Stack spacing = {6} direction = 'row'>
              <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black' }}>
                No. Invoice : {detailData ? (detailData[0].noInvoice || 'Data tidak ditemukan') : 'Loading...'}
              </Typography>
                              
            </Stack>
            </Grid>
            <Grid item lg ={12} xs= {4}>
            <Stack spacing={4} direction='row' justifyContent='space-between'>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
                    Tanggal Beli: {detailData ? (detailData[0].tanggalBeli || 'Data tidak ditemukan') : 'Loading...'}
                </Typography>
                <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
                    {/* Total Harga: IDR {detailData ? (detailData[0].totalHarga || 'Data tidak ditemukan') : 'Loading...'} */}
                    Total Harga: {detailData ? (`Rp ${Number(detailData[0].totalHarga).toLocaleString('id-ID')}` || 'Data tidak ditemukan') : 'Loading...'}
                </Typography>
            </Stack>
            </Grid>

        </Grid>


        <Box style={{ width: '100%', marginTop :'20px', marginBottom : '100px' }}>
        <div style={{ height: 350, width: '100%', marginBottom : '200px' }}>
        <DataGrid rows={newData} columns={newColumns} />
        </div>
        </Box>
    </Container>
  );
}