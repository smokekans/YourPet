import { Box } from '@mui/material';
import React from 'react';
import styles from './styles';

function MUIBreakpoints() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: {
            mobile: 'green',
            tablet: 'red',
            desktop: 'yellow',
          },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, explicabo.
      </Box>
      <Box sx={styles.root}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        molestiae.
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        hide on screens smaller than md
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        hide on screens smaller than md
      </Box>
    </>
  );
}

export default MUIBreakpoints;
