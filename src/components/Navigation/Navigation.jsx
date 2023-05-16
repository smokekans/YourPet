import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import Nav from './Nav/Nav/Nav';
import UserNavigation from './UserNavigation/UserNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import BurgerMenu from './Nav/BurgerMenu';
import { Box } from '@mui/system';

function Navigation() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isDesktop && (
        <>
          <Box
            sx={{
              width: '100%',
              alignItems: 'center',
              display: 'flex',
              // flexDirection: { tablet: 'row' },
            }}
          >
            <Nav />
            {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
          </Box>
        </>
      )}

      {isTablet && (
        <>
          <Box
            sx={{
              width: '100%',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
            <BurgerMenu />
          </Box>
        </>
      )}
      <Box
        sx={{
          width: '100%',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {isMobile && isLoggedIn && <UserNavigation />}
        {isMobile && <BurgerMenu />}
      </Box>
    </>
  );
}

export default Navigation;

// <Box display="flex" justifyContent="space-between">
//   {isDesktop && <Nav />}

//   {isDesktop && (isLoggedIn ? <UserNavigation /> : <AuthNavigation />)}

//   {isTablet && <BurgerMenu />}
//   {isTablet && (isLoggedIn ? <UserNavigation /> : <AuthNavigation />)}

//   {isMobile && <BurgerMenu />}
//   {isMobile && isLoggedIn && <UserNavigation />}
// </Box>
