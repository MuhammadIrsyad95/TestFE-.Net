import React, { useEffect, useState } from 'react';
import { Typography, Button, Stack, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import DetailKelasComboBox from './DetailKelasComboBox';
import useCart from '../hooks/useCart';

const formatCurrency = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

const DetailKelasDetails = ({ menuDetail }) => {
  let produkIds = menuDetail.id;
  const [schedule, setSchedule] = useState('');
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [isSuccessMessageVisible, setSuccessMessageVisible] = useState(false);
  const { handleCart, fetchSpecificCartData, cart } = useCart();
  const [detailData, setDetailData] = useState(null);
  const [isErrorMessageVisible, setErrorMessageVisible] = useState(false);

  const isnt = Cookies.get('auth');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSpecificCartData(produkIds, schedule);
        setDetailData(data);
        console.log("Response from APIiiii:", data);
      } catch (error) {
        console.error('Error fetching detail invoice:', error);
      }
    };
    fetchData();
  }, [schedule, cart, produkIds]);

  console.log(detailData);
  console.log(detailData && detailData.idCourse + " dan " + typeof detailData?.schedule);

  const handleBuyNowClick = () => {
    setConfirmationDialogOpen(true);
  };

  const handleAddToCartClick = async () => {
    try {
      const data = await fetchSpecificCartData(produkIds, schedule);

      // Check if the same product and schedule already exists in the cart
      if (data && data.idCourse === produkIds && data.schedule === schedule) {
        console.log("Tidak dapat memesan, silahkan pilih course atau jadwal lain");
        setErrorMessageVisible(true);
        return;
      }

      setConfirmationDialogOpen(true);
    } catch (error) {
      console.error('Error checking cart:', error);
    }
  };

  let handleConfirm;

  if (detailData && detailData.idCourse === produkIds && detailData.schedule === schedule) {
    console.log("Tidak dapat memesan, silahkan pilih course atau jadwal lain");
  } else {
    handleConfirm = () => {
      console.log("Handling confirmation");
      // Call the handleCart function here
      handleCart(produkIds, schedule);
      // Show success message
      setSuccessMessageVisible(true);
      // Close the dialog
      setConfirmationDialogOpen(false);
    };
  }

  const handleCancel = () => {
    console.log("Handling cancellation");
    // Close the dialog
    setConfirmationDialogOpen(false);
    setErrorMessageVisible(false); // Reset error message on cancel
  };

  useEffect(() => {
    console.log("isConfirmationDialogOpen:", isConfirmationDialogOpen);
    console.log("handleConfirm:", handleConfirm);
  }, [isConfirmationDialogOpen, handleConfirm]);

  const isDisabled = !produkIds || !schedule || (detailData?.idCourse !== 0 && detailData?.schedule !== '');

  return (
    <Grid item xs={12} lg={6}>
      <br />
      <Typography variant="body1" component="p" color="textPrimary" style={{ fontWeight: 'lighter', color: '#828282' }}>
        {menuDetail.namaKategori}
      </Typography>
      <Typography variant="h5" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
        {menuDetail.namaCourse}
      </Typography>
      <Typography variant="h7" component="p" color="textPrimary" style={{ fontWeight: 'bold', color: '#5D5FEF', marginBottom: '20px' }}>
        {formatCurrency(menuDetail.harga)}
      </Typography>

      {/* Dropdown Component */}
      <Grid item xs={12} lg={12} style={{ marginBottom: '20px', marginTop: '20px' }}>
        <DetailKelasComboBox setSchedule={setSchedule} />
      </Grid>

      {/* Buttons Section */}
      <Grid item xs={12} lg={12}>
        <Stack spacing={2} direction="row">
          {isnt === undefined ? (
            <>
              <Link to='/login'>
                <Button variant="outlined" fullWidth style={{ fontWeight: 'bold', marginTop: '50px', backgroundColor: 'white', color: '#5D5FEF', outlineColor: '5D5FEF' }}>
                  Masukkan Keranjang
                </Button>
              </Link>
              <Link to='/login'>
                <Button variant="contained" fullWidth style={{ fontWeight: 'bold', marginTop: '50px', backgroundColor: '#5D5FEF', color: 'white' }}>
                  Beli Sekarang
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to='#'>
                <Button
                  variant="outlined"
                  onClick={handleAddToCartClick}
                  fullWidth
                  style={{
                    fontWeight: 'bold',
                    marginTop: '50px',
                    backgroundColor: isDisabled ? '#E0E0E0' : 'white',
                    color: isDisabled ? '#A9A9A9' : '#5D5FEF',
                    outlineColor: '5D5FEF',
                  }}
                  disabled={isDisabled}
                >
                  Masukkan Keranjang
                </Button>
              </Link>
              <Link to='/checkout'>
                <Button
                  variant="contained"
                  onClick={handleConfirm}
                  fullWidth
                  style={{
                    fontWeight: 'bold',
                    marginTop: '50px',
                    backgroundColor: isDisabled ? '#E0E0E0' : '#5D5FEF',
                    color: isDisabled ? '#A9A9A9' : 'white',
                  }}
                  disabled={isDisabled}
                >
                  Beli Sekarang
                </Button>
              </Link>
            </>
          )}
        </Stack>

        <Dialog open={isConfirmationDialogOpen} onClose={handleCancel}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <Typography variant="body1" component="p" color="textPrimary">
              {`Apakah anda ingin membeli course dengan jadwal ${schedule} ?`}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            {handleConfirm && (
              <Button onClick={handleConfirm} color="primary" autoFocus>
                Confirm
              </Button>
            )}
          </DialogActions>
        </Dialog>

        {/* Error Message */}
        {isErrorMessageVisible && (
          <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '20px', color: 'red' }}>
            Anda sudah memilih produk dengan jadwal yang sama sebelumnya.
          </Typography>
        )}

        {/* Success Message */}
        {isSuccessMessageVisible && (
          <Typography variant="body1" component="p" color="textPrimary" style={{ marginTop: '20px', color: 'green' }}>
            Berhasil memasukkan course ke keranjang
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default DetailKelasDetails;