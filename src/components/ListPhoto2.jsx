import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Foto1 from '.././assets/benefitok.png'

const ListPhoto2 = () => {
  return (
    <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor:'#fff',marginBottom: '100px' }}>
      <Container maxWidth="md" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} lg= {3}>
            <img src={Foto1} alt="Image 1" style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" style={{ textAlign: 'left',color: '#5D5FEF',fontWeight: 'bold' }}>
              Benefit ikut Apple Course

            </Typography>
            <br/>
            <Typography style={{ textAlign: 'left' }}>
              Bergabung dengan Apel Musik memberikan pengalaman musik tak tertandingi. Nikmati lebih dari 500 kelas musik dengan instruktur berpengalaman. Dapatkan kesempatan berkolaborasi dengan coach khusus yang telah sukses bekerja dengan musisi terkenal. Lebih dari 50 lulusan telah mencapai keberhasilan dalam industri musik melalui kursus kami. Raih kreativitas dan inovasi dengan membentuk keterampilan memukau. Bergabunglah dengan komunitas dinamis, bagikan pengalaman dengan sesama musisi, dan bentuk jaringan berharga. Akses eksklusif ke acara dan pertunjukan musik. Pilih Apel Musik untuk pengalaman musik yang mendalam dan persiapan terbaik menuju kesuksesan!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPhoto2;