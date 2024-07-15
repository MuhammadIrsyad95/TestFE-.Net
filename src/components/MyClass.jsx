import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Container } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import FotoDetailKelas from '../assets/DetailKelas1.png';
import useOrder from '../hooks/useOrder';

const MyClass = () => {
  const { loading, error, fetchMyclass } = useOrder();
  const [detailData, setDetailData] = useState(null);
  // Data array yang akan digunakan untuk membuat struktur pengulangan
  useEffect(() => {
    const fetchData = async () => {
      //if (orderId) {
        try {
          const data = await fetchMyclass();
          setDetailData(data);
          console.log("Response from API:", data); // Periksa respons dari API
        } catch (error) {
          console.error('Error fetching detail invoice:', error);
        }
      //}
    };
    fetchData();
  }, []);

  // const dataClass = [
  //   {
  //     imgSrc: FotoDetailKelas,
  //     title: 'Kursus Drummer Special Coach (Eno Netral)',
  //     description: 'Jadwal: Senin, 25 Juli 2022',
  //   },
  //   // Tambahkan objek lain jika diperlukan
  // ];

  return (
    <>
      <Container maxWidth="lg" style={{ minHeight: '100vh', marginBottom: '160px' }}>
        <Grid container spacing={4} style={{ marginTop: '100px' }}>
          {detailData?.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item sm={2} xs={12}>
                <img src={`${import.meta.env.VITE_API_URL}product/${item.imageUrl}`} style={{ width: '100%' }} />
                {/* ${import.meta.env.VITE_API_URL} */}
                {/* ${item.imageUrl} */}
              </Grid>
              <Grid item sm={10} xs={12} style={{ marginTop: '15px' }}>
                <Typography variant="body1" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#828282' }}>
                  {item.namaKategori}
                </Typography>
                <Typography variant="h5" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: 'black' }}>
                  {item.namaCourse}
                </Typography>
                <Typography variant="body1" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#5D5FEF' }}>
                  Jadwal : {item.schedule}
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <hr style={{}} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MyClass;