import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { AppBar, Box, Toolbar } from '@mui/material';

function Header() {
  return (
    <AppBar position="relative" sx={{ bgcolor: 'background.default' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'background.default',
            flexDirection: 'row',
            width: 1,
            pt: '20px',
          }}
        >
          <Logo />
          <Navigation />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
