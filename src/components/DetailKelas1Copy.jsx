import React from 'react';
import { Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import DetailKelasImage from './DetailKelasImage';
import DetailKelasDetails from './DetailKelasDetails';
import DetailKelasDescription from './DetailKelasDescription';
import DetailKelasSimilarProducts from './DetailKelasSimilarProducts';
import useDetailClass from '../hooks/useDetailClass';

import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const DetailKelas1Copy = () => {
  const { idKategori, idCourse } = useParams();
  const { menuDetail, products } = useDetailClass(idKategori, idCourse);
  // const { addToCart } = useCart();
  // const { menuDetail1, menus1 } = useListMenuData(menuName);

  
 
  const handleRefresh = () => {
    // Add your logic here
    // setRefresh(!refresh);
    history.push(`/detailclass/${menuDetail.idKategori}/${products.idCourse}`);
  };

  return (
    <>
      {/* Product Details Section */}
      <Container>
        <Grid container spacing={4} style={{ marginTop: '100px' }}>
          {/* Left Section with Image */}
          <Grid item xs={12} lg={6}>
            <DetailKelasImage products={products} menuDetail={menuDetail} handleRefresh={handleRefresh} />
          </Grid>

          {/* Right Section with Product Details */}
          <DetailKelasDetails menuDetail={menuDetail}  handleRefresh={handleRefresh} />
        </Grid>

        {/* Description Section */}
        <DetailKelasDescription menuDetail={menuDetail} />
      </Container>

      {/* Similar Products Section */}
      <DetailKelasSimilarProducts products={products} menuDetail={menuDetail} handleRefresh={handleRefresh} />
    </>
  );
};

export default DetailKelas1Copy;