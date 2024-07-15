import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import HeadLanding from '../components/HeadLanding';
import Checkbox from '@mui/material/Checkbox';

import ModalPaymentCO from '../components/ModalPaymentCO';
import { Stack } from '@mui/system';
import { AuthContext } from '../contexts/AuthContext';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const formatCurrency = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckoutPage() {
  const { token } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isItemsSelected, setIsItemsSelected] = useState(false);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}api/Cart/CartUser`, {
          headers: {
            Authorization: `Bearer ${token}` // Gunakan token dari Context
          }
        });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setError('Error fetching cart data. Please try again.');
      }
    }

    if (token) {
      fetchCartData();
    }
  }, [token]);
  // console.log('ini carrrrrcart'+ cart);
  const [products, setProducts] = useState([]);

  const handleSelectItem = (event, selectedItem) => {
    const isChecked = event.target.checked;

    const updatedCart = cart.map((item) => {
      if (item.id === selectedItem.id) {
        return { ...item, isSelected: isChecked };
      }
      return item;
    });
    
    setCart(updatedCart);
    updateTotalPrice(updatedCart);
    
    const isAllChecked = updatedCart.every(item => item.isSelected);
    setIsAllSelected(isAllChecked);

    const selectedIds = updatedCart.filter(item => item.isSelected).map(item => item.id);
    setSelectedItems(selectedIds);

    setIsItemsSelected(updatedCart.some((item) => item.isSelected));
  };

  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;

    setIsAllSelected(isChecked);
      
    // if (cart == 0 ){
    //   setIsAllSelected(!isChecked);
    // }else {
    //   setIsAllSelected(isChecked);
    // }
    const updatedCart = cart.map((item) => ({
      ...item,
      isSelected: isChecked,
    }));

    setCart(updatedCart);
    updateTotalPrice(updatedCart);
    setSelectedItems(isChecked ? updatedCart.map((item) => item.id) : []);

    setIsItemsSelected(isChecked);
  };



const updateTotalPrice = (updatedCart) => {
  const totalPrice = updatedCart.reduce((total, item) => {
    if (item.isSelected) {
      return total + item.harga;
    }
    return total;
  }, 0);
  
  setTotalPrice(totalPrice);
};

const removeFromCart = async (product) => {
  const confirmed = window.confirm("Apakah Anda yakin ingin menghapus item dari keranjang?");
  if (confirmed) {
    try {
      // Melakukan DELETE request ke API untuk menghapus produk dari cart
      await axios.delete(`${import.meta.env.VITE_API_URL}api/Cart/${product.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Mengupdate cart setelah produk dihapus
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
     
      updateTotalPrice(updatedCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
      // Handle error
    }
  }
};



  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <HeadLanding />
      <Container>
        <Typography variant="h5" gutterBottom>
          Shopping Cart
        </Typography>
        <Box mt={4}>
          
          
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <Checkbox
                  {...label}
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
                <ListItemText primary="Pilih Semua" />
              </ListItem>
              <hr/>
              {cart.map((item) => (
                <ListItem key={item.id}>
                  <Checkbox
                    {...label}
                    checked={item.isSelected || isAllSelected}
                    onChange={(event) => handleSelectItem(event, item)}
                  />
                  <Grid container spacing={2}>

                    <Grid item xs = {12} md = {6}  lg = {4}>
                  <img src={`${import.meta.env.VITE_API_URL}product/${item.imageUrl}`} alt={item.namaKategori} width='90%' style={{marginRight:'5%'}} />
                  </Grid>
                   
                  

                  <Grid item xs = {12} md = {6}  lg = {6}>
                  <ListItemText
                    primary={item.namaKategori}
                    
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      component: 'h2',
                      variant: 'h6',
                      style: {
                        fontWeight: 'bold',
                        fontFamily: 'Poppins, sans-serif', // Add this line for Poppins font
                      },
                    }}
                    primary={item.namaCourse}
                    secondary={`Jadwal: ${item.schedule}`}
                  />
                  <ListItemText
                      primary={`${formatCurrency(item.harga)}`}
                      primaryTypographyProps={{
                        component: 'h2',
                          variant: 'h2',
                        style: {
                          fontWeight: 'bold',
                          fontSize: '1.2rem', // Adjust the font size as needed
                          fontFamily: 'Poppins, sans-serif',
                          color: '#5D5FEF',
                        },
                      }}
                    />
                  </Grid>

                  {/* <Grid container spacing={2}> */}
                  <Grid item xs = {12} md = {6}  lg = {2}>
                  <IconButton
                    color="error"
                    onClick={() => removeFromCart(item)} // Memanggil fungsi removeFromCart saat tombol di klik
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                    <Typography>
                      Delete
                    </Typography>
                    
                  </IconButton>
                  </Grid>
                  </Grid>
                  {/* </Grid> */}
                  <br />
                  <hr />
                </ListItem>
              ))}
            </List>
          </Grid>
      
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Total" />
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  {/* Display the total price in the first column */}
                  <Grid item xs={12} lg ={10}>
                    <Typography variant="h6">
                      Total Harga Produk Terpilih: {formatCurrency(totalPrice)}
                    </Typography>
                  </Grid>
                  {/* Display the "Bayar Sekarang" button in the second column */}
                  <Grid item xs={12} lg = {2}>
                    {isItemsSelected && cart!=0 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpen}
                        style={{ fontWeight: 'bold', color: 'white', backgroundColor : '#5D5FEF' }}
                        fullWidth
                        
                      >
                        Bayar Sekarang
                      </Button>
                    ) : (
                      <Typography variant="body1" style={{ color: 'red', marginTop: '10px' }}>
                        Silahkan pilih produk terlebih dahulu
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <ModalPaymentCO open={isModalOpen} handleClose={handleClose} keranjangIds={selectedItems} />


              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
        
        
      </Container>
    </>
  );
}

export default CheckoutPage;