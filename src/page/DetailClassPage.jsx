import React from 'react';
import { Box } from '@mui/material';
import HeadLanding from '../components/HeadLanding';
import HeadDrawer from '../components/HeadDrawer';
import DetailKelas1Copy from '../components/DetailKelas1Copy';
// import ListPhotobawahBannerLogin from '../components/ListPhotobawahBannerLogin';
import Footer from '../components/Footer';
import Cookies from 'js-cookie';
// import DetailClass2Copy from '../components/DetailClass2Copy';

const DetailClassPage = () => {
  const isnt = Cookies.get('auth');

  return (
    <Box>
      {isnt == 'true' ? (
        <HeadLanding />
      ) : (
        <HeadDrawer />
      )}

      {/* Render your DetailKelas1Copy component */}
      <DetailKelas1Copy />

      {/* Render your ListPhotobawahBannerLogin component */}
      {/* <DetailClass2Copy/> */}

      {/* Render your Footer component */}
      <Footer />
    </Box>
  );
};

export default DetailClassPage;