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
import Logo from '.././assets/logo.png';
import { css } from '@emotion/react';
import Cart from '.././assets/cart.png';
import Person from '.././assets/person.png';
import Logout from '.././assets/logout.png';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Daftar Sekarang'];

const hideOnMobile = css`
  display: block;

  @media (max-width: 1080px) {
    display: none;
  }
`;

function HeadDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box color='#F2C94C' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <span style={{color:'black'}}>Menu</span>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to="/register" style={{textDecoration:'none'}}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center', color:'black' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Link to="/login" style={{textDecoration:'none'}}>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
            <span>Masuk</span>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box position="sticky" sx={{ display: 'flex', marginBottom:'50px'}}>
      <CssBaseline />

      <AppBar component="nav" style = {{backgroundColor :'#F2C94C'}}>
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
          <Link to = '/'>
          <img
            src={Logo}
            alt="Logo"
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
          
          <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
            
            {navItems.map((item) => (
              <Link to="/register">
                <Button key={item} style={{ color: '#000', marginRight:'10px' }}>
                  {item}
                </Button>
              </Link>
            ))}
            <Link to="/login">
              <Button variant="contained" style={{ backgroundColor: "#5D5FEF", color: "white" }}>Masuk</Button>
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

HeadDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeadDrawer;