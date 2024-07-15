import * as React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const getFutureDates = () => {
  const today = new Date();
  const futureDates = [];
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    if (nextDate.getDay() !== 0) {
      // Tambahkan hanya jika bukan hari Minggu (0 adalah Minggu)
      futureDates.push(nextDate);
    }
  }
  return futureDates;
};

const formatDate = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
};

const formatDate2 = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};



const DetailKelasComboBox = ({ setSchedule }) => {
  const futureDates = getFutureDates();
  const dateOptions2 = futureDates.map((date) => ({
    label: formatDate(date),
    value: formatDate2(date),
  }));

  return (
    <Autocomplete
      id="combo-box-demo"
      options={dateOptions2}
      getOptionLabel={(option) => option.label}
      //value={schedule}
      onChange={(event, value) => setSchedule(value?.value || '')}
      sx={{ width: 280 }}
      renderInput={(params) => <TextField {...params} label="Pilih Jadwal Kelas" />}
    />
  );
};

export default DetailKelasComboBox;