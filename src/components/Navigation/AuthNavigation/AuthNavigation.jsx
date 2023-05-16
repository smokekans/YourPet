import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink as Routerlink } from 'react-router-dom';
import styles from './styles';
import { ReactComponent as PawPrint } from '../../../images/icons/pawprint.svg';

function AuthNavigation() {
  return (
    <Box sx={styles.authContainer}>
      <Button component={Routerlink} to="/login" variant="outlined" sx={styles.authBtn}>
        <Typography sx={styles.btnText}>
          Log IN
          <Box sx={styles.print}>
            <PawPrint />
          </Box>
        </Typography>
      </Button>
      <Button component={Routerlink} to="/register" variant="outlined" sx={styles.authBtn}>
        <Typography sx={styles.btnText}>Registration</Typography>
      </Button>
    </Box>
  );
}

export default AuthNavigation;
