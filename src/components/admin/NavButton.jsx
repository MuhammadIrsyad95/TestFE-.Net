import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MasterUser from './MasterUser';
import MasterCategory from './MasterCategory';
import MasterCourse from './MasterCourse';
import MasterPayment from './MasterPayment';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '65px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Data Pengguna" {...a11yProps(0)} />
          <Tab label="Data Category Course" {...a11yProps(1)} />
          <Tab label="Data Course" {...a11yProps(2)} />
          <Tab label="Payment Method" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MasterUser/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MasterCategory/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MasterCourse/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <MasterPayment/>
      </CustomTabPanel>
    </Box>
  );
}