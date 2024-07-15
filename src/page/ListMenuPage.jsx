import React from 'react';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';

import HeadLanding from '../components/HeadLanding';
import HeadDrawer from '../components/HeadDrawer';
import Footer from '../components/Footer';
import useListMenuData from '../hooks/useListMenuData';
import ListMenuBanner from '../components/ListMenuBanner';
import ListMenuDetail from '../components/ListMenuDetail';
import ListMenuList from '../components/ListMenuList';
import Cookies from 'js-cookie';


const ListMenuPage = () => {
  const { menuName } = useParams();
  const { menuDetail, menus } = useListMenuData(menuName);
  const isnt = Cookies.get('auth');

  return (
    <Box>
      {isnt == 'true' ? (
        <HeadLanding />
      ) : (
        <HeadDrawer />
      )}
      <ListMenuBanner   menuDetail={menuDetail}/>
      <ListMenuDetail namaCategory={menuDetail.nama_kategori} deskripsi={menuDetail.deskripsi} />
      <ListMenuList menus={menus} menuDetail={menuDetail} />
      <Footer />
    </Box>
  );
};

export default ListMenuPage;