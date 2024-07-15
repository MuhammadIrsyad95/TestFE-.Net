// MasterUser.jsx
import * as React from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import UserForm from './UserForm';
import ButtonGroup from '@mui/material/ButtonGroup';
import useUser from '../../hooks/useUser';

export default function MasterUser() {
  const { data, loading, error, handlePostData, handleUpdateData } = useUser();

  const newData = data?.map((user) => ({
    id: user.id,
    name: user.nama,
    email: user.email,
    role: user.role,
    status: user.status === 1 ? 'Aktif' : 'Tidak Aktif',
  })) || [];

  const [selectedData, setSelectedData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState('');

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
    if (type === 'add') {
      setSelectedData(null);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  const handleUpdateModal = (id) => {
    const dataToUpdate = newData.find((user) => user.id === id);
    setSelectedData(dataToUpdate);
    setModalType('update');
    setOpen(true);
  };

  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleUpdateActiveModal = (id) => {
    console.log(`Updating status for ID ${id}, Activate`);

    axios.patch(`${import.meta.env.VITE_API_URL}api/User/${id}/Activate`)
      .then((response) => {
        console.log('Update successful:', response.data);
        setAlertOpen(true);
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
    window.location.reload();
  };

  return (
    <div style={{ minHeight: '80vh', width: '100%' }}>
      <Button variant="outlined" onClick={() => handleOpen('add')} style={{ marginBottom: '20px' }}>
        Tambah Data
      </Button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div style={{ height: 350, width: '100%' }}>
        <DataGrid
          rows={newData}
          columns={[
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'name', headerName: 'Nama', width: 100 },
            { field: 'email', headerName: 'Email', width: 400 },
            { field: 'role', headerName: 'Role', width: 200 },
            { field: 'status', headerName: 'Status', width: 150 },
            {
              field: 'action',
              headerName: 'Aksi',
              sortable: false,
              filterable: false,
              renderCell: (params) => (
                <ButtonGroup variant="outlined" color="primary">
                  <Button onClick={() => handleUpdateModal(params.row.id)}>
                    Ubah Data
                  </Button>
                  <Button onClick={() => handleUpdateActiveModal(params.row.id)}>
                    Ubah Status
                  </Button>
                </ButtonGroup>
              ),
              width: 300,
            },
          ]}
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={10} sm={10}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalType === 'add' ? 'Form Tambah Data' : 'Form Update Data'}
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Button variant="outlined" onClick={handleClose}>
                X
              </Button>
            </Grid>

            <Grid item xs={12} sm={12}>
              {modalType === 'add' || (modalType === 'update' && selectedData) ? (
                <UserForm
                  initialValues={modalType === 'add' ? null : selectedData}
                  handlePostData={handlePostData}
                  handleUpdateData={handleUpdateData}
                />
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Modal
        open={alertOpen}
        onClose={handleCloseAlert}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Status Updated
          </Typography>
          <Button variant="outlined" onClick={handleCloseAlert} style={{ float: 'right' }}>
            OK
          </Button>
        </Box>
      </Modal>
    </div>
  );
}