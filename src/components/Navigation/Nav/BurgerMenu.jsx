import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import Nav from './Nav/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import useMatchMedia from 'hooks/useMatchMedia';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Logo from 'components/Logo/Logo';
import { ReactComponent as CrossSmall } from '../../../images/icons/cross-small.svg';

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
      {/* <Box> */}
      <IconButton
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{
          p: 0,
          ml: '24px',
          // ml: 'auto',
          // mr: 0,
          // mr: { tablet: '24px' },
          color: '#FFC107',
        }}
      >
        <MenuIcon />
      </IconButton>
      {/* </Box> */}

      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          color: '#FFC107',
          '& .MuiPaper-root': {
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100vw',
            height: '100vh',
            position: 'unset',
          },
        }}
      >
        <Box
          sx={{
            p: { mobile: '20px 20px 0 20px', tablet: '24px 32px 0 32px' },
            mb: { mobile: '38px', tablet: '92px' },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fill: '#FFC107',
          }}
        >
          <Logo />
          <CrossSmall onClick={handleMenuClose} fill="#FFC107" />
        </Box>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            display: 'flex',
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
