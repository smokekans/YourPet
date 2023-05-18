import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import Nav from '../Nav/Nav/Nav';
import UserNavigation from '../UserNavigation/UserNavigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import BurgerMenu from '../Nav/BurgerMenu/BurgerMenu';
import { Box } from '@mui/system';
import styles from './styles';
import MobileNav from '../Nav/MobileNav';

function Navigation() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  const accessToken = useSelector(getAccessToken);

  return (
    <>
      {isDesktop && (
        <>
          <Box sx={styles.desktop}>
            <Nav />
            {accessToken ? <UserNavigation /> : <AuthNavigation />}
          </Box>
        </>
      )}

      {isTablet && (
        <>
          <Box sx={styles.tablet}>
            {accessToken ? <UserNavigation /> : <AuthNavigation />}
            <BurgerMenu />
          </Box>
        </>
      )}

      {isMobile && (
        <>
          <Box sx={styles.mobile}>
            <MobileNav />
          </Box>
        </>
      )}
    </>
  );
}

export default Navigation;
