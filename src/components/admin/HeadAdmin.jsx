import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../.././assets/logo.png';
import { css } from '@emotion/react';
import Cart from '../.././assets/cart.png';
import Person from '../.././assets/person.png';
import Logout from '../.././assets/logout.png';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';


const drawerWidth = 240;
const navItems = ['Kelasku', 'Pembelian'];

const hideOnMobile = css`
  display: block;

  @media (max-width: 1080px) {
    display: none;
  }
`;

function HeadAdmin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logoutUser } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logoutUser();  // Call the logoutUser function when logout button is clicked
     // Explicitly set isAuth to false

  };

  const drawer = (
    <Box color='#F2C94C' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <span style={{color:'black'}}>Menu</span>
      <Divider />
      <List>
        <ListItemButton sx={{ textAlign: 'center', color:'black' }}>
          <ListItemText>Master Data</ListItemText>
        </ListItemButton>

        <ListItemButton sx={{ textAlign: 'center', color:'black' }}>
          <ListItemText>Invoice</ListItemText>
        </ListItemButton>
        <hr/>
        <ListItemButton sx={{ textAlign: 'center', color:'black' }}>
          <ListItemText>Users</ListItemText>
        </ListItemButton>

        <Link to= '/login'>
          <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center', color:'black' }}>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" component="nav" style = {{backgroundColor :'#F2C94C'}}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to = '/admin'>
          <img
            src={Logo}
            alt="Logo"
            // style={{
            // marginLeft: {
            //   xs: '70px', // Margin kiri saat ukuran layar adalah 'xs' (mobile)
            //   lg: '0',   // Margin kiri saat ukuran layar adalah 'lg' (desktop)
            // },  // Menempatkan logo ke tengah horizontal
            // marginRight: 'auto', // Menempatkan logo ke tengah horizontal
            // display: 'block'}}
            // Gunakan media query di sini untuk menyembunyikan elemen pada layar dengan lebar maksimum 1080px
            className="on-mobile"
          />
          </Link>

          {/*<img
            src={Logo}
            alt="Logo"
            style={{
              display: 'block',
              '@media (max-width: 1080px)': {
                display: 'none', 
              },
            }}
          />*/}
            {/*<Button width="18" height="18" sx={{ display: { xs: 'block', sm: 'none' }, marginTop: '10px' }}>
            <img width="18" height="18" src={Person} alt="Person" /></Button>
           <Link to= '/login'>
           <Button width="18" height="18" sx={{ display: { xs: 'block', sm: 'none' }, marginTop: '10px' }}>
           <img width="18" height="18" src={Logout} alt="Logout" /></Button></Link>*/}

          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
            <Link to= '/admin'>
            <Button style={{ color: '#000', marginRight:'10px' }}>
                Master Data
            </Button>
            </Link>

            <Link to= '/invoiceadmin'>
            <Button style={{ color: '#000', marginRight:'10px' }}>
                Invoice
            </Button>
            </Link>
            <span style={{color:'black', marginLeft:'10px', marginRight:'10px'}}>|</span>
            <Button><img width="20" height="20" src={Person} alt="Person" /></Button>
            
            <Link to= '/login'>
            <Button><img width="20" height="20" onClick={handleLogout} src={Logout} alt="Logout" /></Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

HeadAdmin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeadAdmin;