import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import Nav from '../Nav/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import useMatchMedia from 'hooks/useMatchMedia';
import AuthNavigation from '../../AuthNavigation/AuthNavigation';
import { getAccessToken } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Logo from 'components/Logo/Logo';
import { ReactComponent as Cross } from '../../../../images/icons/cross.svg';
import styles from './styles';

function BurgerMenu() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();

  const accessToken = useSelector(getAccessToken);

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
        sx={styles.iconBtn}
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
        sx={styles.menu}
      >
        <Box sx={styles.box}>
          <Logo />
          <Cross onClick={handleMenuClose} />
        </Box>
        <MenuItem onClick={handleMenuClose} sx={styles.menuItem}>
          {isMobile && !accessToken && <AuthNavigation />}
          {isMobile && <Nav />}
          {isTablet && <Nav />}
        </MenuItem>
      </Menu>
    </>
  );
}

export default BurgerMenu;
