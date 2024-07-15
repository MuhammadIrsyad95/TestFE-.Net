import React, { useState, useEffect, useContext } from 'react';
import {
  Modal,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { Stack } from '@mui/system';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const ModalPaymentCO = ({ open, handleClose, keranjangIds }) => {
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

  //const [paymentMethods, setPaymentMethods] = useState([]);
  const { token } = useContext(AuthContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}api/Payment/User`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPaymentMethods(data);
      } catch (error) {
        console.error('Error fetching payment methods:', error);
        // Handle error
      }
    };

    fetchPaymentMethods();
  }, []);

  const handlePay = async () => {
    try {
      const paymentPayload = {
        keranjangIds: keranjangIds, // Use the provided keranjangIds prop
        metode_id: selectedPaymentMethod?.id, // Access the 'id' of the selected payment method
      };

      const response = await axios.post(`${import.meta.env.VITE_API_URL}api/Order`, paymentPayload, {
        headers: {
          Authorization: `Bearer ${token}`, // Use the token
          'Content-Type': 'application/json',
        },
      });

      console.log('Payment successful!', response.data);
      // Additional logic after successful payment
    } catch (error) {
      console.error('Error during payment:', error);
      console.log('Payment failed:', error.response.data);
      // Additional error handling
    }
  };

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Pilih Metode Pembayaran
        </Typography>
        <Grid container spacing={4}>
          <Grid item lg={12} xs={12}>
            <Stack spacing={2}>
              {paymentMethods.map((item) => (
                <RadioOption
                  key={item.id}
                  label={item.nama_metode}
                  logo={`${import.meta.env.VITE_API_URL}payment/${item.imageUrl}`}
                  onSelect={() => handlePaymentSelection(item)}
                />
              ))}
            </Stack>
            <Grid container spacing={4} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Stack spacing={6} direction='row'>
                <Button
                  variant="outlined"
                  sx={{ width: '130%', marginRight: '20px' }}
                  style={{ fontWeight: 'bold', backgroundColor: 'white', color: '#5D5FEF', outlineColor: '#5D5FEF' }}
                  fullWidth
                  onClick={handleClose}
                >
                  Batal
                </Button>
                
                <Link to={`/successpurchase`}>
                  <Button
                    variant="contained"
                    sx={{ width: '130%' }}
                    style={{ fontWeight: 'bold', backgroundColor: '#5D5FEF', color: 'white', outlineColor: '#5D5FEF' }}
                    fullWidth
                    onClick={handlePay}
                  >
                    Bayar
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

const RadioOption = ({ label, logo, onSelect }) => {
  return (
    <Stack direction='row' alignItems="center">
      <input type="radio" name="paymentOption" onChange={onSelect} />
      <img src={logo} alt={`logo ${label}`} width="30" height="30" style={{ marginRight: '20px', marginTop: '2px' }} />
      <Typography variant='body1' style={{ fontWeight: 'bold', marginTop: '8px' }}>
        {label}
      </Typography>
    </Stack>
  );
};

export default ModalPaymentCO;
