import React from 'react';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import useCourseLimit from '../hooks/useCourseLimit';

const ListPhotobawahBanner = () => {
    const { data, loading, error } = useCourseLimit();
    
    // Menampilkan indikator loading jika loading adalah true
    if (loading) {
        return (
            <div>
                <Skeleton variant="text" />
                <Skeleton variant="rect" width={210} height={118} />
                {/* ... tambahkan skeleton lainnya ... */}
            </div>
        );
    }

    // Menampilkan pesan error jika error terjadi
    if (error) {
        return <div>Error: {error.message}</div>;
    }

            const formatPrice = (price) => {
        // Ubah angka harga menjadi format dengan pemisah ribuan
        return price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
        });
        };

        
    return (
        // Render data jika data tersedia
        <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor: '#fff' }}>
            <Container maxWidth="lg" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
                <Typography variant="h6" style={{ textAlign: 'center', margin: '0 auto', fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
                    Explore kelas favorit
                </Typography>
                <br />
                <Grid container spacing={4}>
                    {data && data.map(product => (
                        <Grid item xs={6} lg={4} key={product.id}>
                            <Paper style={{ backgroundColor: '#fff', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'start', borderRadius: 0 }}>
                                <Link to ={`/detailclass/${product.id}/${product.idKategori}`} style={{ textDecoration: 'none' }}>
                                    <img src={`${import.meta.env.VITE_API_URL}${product.imageUrl}`} alt={product.deskripsi} style={{ width: '100%' }} />
                                </Link>

                                <br />
                                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#828282' }}>
                                    {product.namaKategori}
                                </Typography>
                                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
                                    {product.namaCourse}
                                </Typography>
                                
                                <Typography variant="body2" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
                                     {formatPrice(product.harga)}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
    
}

ListPhotobawahBanner.propTypes = {
    data: PropTypes.array, // Menentukan tipe data untuk prop 'data' yang digunakan dalam komponen
    loading: PropTypes.bool, // Menentukan tipe data untuk prop 'loading' yang digunakan dalam komponen
    error: PropTypes.object // Menentukan tipe data untuk prop 'error' yang digunakan dalam komponen
};

export default ListPhotobawahBanner;