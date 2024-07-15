import React from 'react';
import PropTypes from 'prop-types';
import useCourse from '../hooks/useCourse';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';
import useCategory from '../hooks/useCategory';

const ListPhoto1 = () => {
  const { data, loading, error } = useCategory();

  if (loading) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="rect" width={210} height={118} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box maxWidth="100%" style={{ marginTop: '100px', backgroundColor: '#f6f6fe' }}>
      <Container maxWidth="md" style={{ paddingTop: '50px', paddingBottom: '60px' }}>
        <Typography variant="h6" style={{ textAlign: 'center', margin: '0 auto', fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
          Explore kelas favorit
        </Typography>

        <br />
        <Grid container spacing={4}>
          {data && data.map(menu => (
            <Grid item xs={6} lg={3} key={menu.id}>
              <Link to={`/listmenu/${menu.id}`} style={{ textDecoration: 'none' }}>
                <Paper style={{ backgroundColor: 'transparent', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', borderRadius: 0 }}>
                  <img src={`${import.meta.env.VITE_API_URL}category/${menu.imageUrl}`} alt="Image 1" style={{ width: '70%' }} />
                  <br />
                  <Typography variant="h6" component="p" color="textPrimary" style={{ color: '#000000' }}>{menu.nama_kategori}</Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

ListPhoto1.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default ListPhoto1;