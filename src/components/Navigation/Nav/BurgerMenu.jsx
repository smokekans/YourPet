import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Nav from './Nav';
import MenuIcon from '@mui/icons-material/Menu';
import useMatchMedia from 'hooks/useMatchMedia';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

function BurgerMenu() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();

  const isLoggedIn = useSelector(getIsLoggedIn);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          '& .MuiPaper-root': {
            width: '100vw',
            height: '100vh',
          },
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            flexDirection: 'column',
            cursor: 'auto',
            '&:hover': { bgcolor: 'background.default' },
          }}
        >
          {isMobile && !isLoggedIn && <AuthNavigation />}
          {isMobile && <Nav />}
          {isTablet && <Nav />}
        </MenuItem>
      </Menu>
    </>
  );
}

export default BurgerMenu;
