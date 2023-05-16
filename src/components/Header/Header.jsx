import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { AppBar, Box, Toolbar } from '@mui/material';
import styles from './styles';

function Header() {
  return (
    <AppBar position="relative" sx={styles.header}>
      <Toolbar sx={styles.container}>
        <Box sx={styles.headerList}>
          <Logo />
          <Navigation />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
