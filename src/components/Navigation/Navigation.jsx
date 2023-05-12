import useMatchMedia from 'hooks/useMatchMedia';
import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import Nav from './Nav/Nav';
import UserNavigation from './UserNavigation/UserNavigation';
import AuthNavigation from './AuthNavigation/AuthNavigation';
import BurgerMenu from './Nav/BurgerMenu';

function Navigation() {
  const { isMobile } = useMatchMedia();
  const { isTablet } = useMatchMedia();
  const { isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isDesktop && (
        <>
          <Nav />
          {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
        </>
      )}
      {isTablet && (
        <>
          {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
          <BurgerMenu />
        </>
      )}
      {isMobile && isLoggedIn && <UserNavigation />}
      {isMobile && <BurgerMenu />}
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
