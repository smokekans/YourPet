import useMatchMedia from 'hooks/useMatchMedia';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import BurgerMenu from './BurgerMenu';
import UserNavigation from '../UserNavigation/UserNavigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Nav from './Nav/Nav';

function MobileNav() {
  const { isMobile } = useMatchMedia();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <BurgerMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav>
          {isMobile && (
            <div onClick={() => setOpen()}>
              {isLoggedIn ? <UserNavigation /> : <AuthNavigation />}
            </div>
          )}
          <Nav />
        </nav>
      )}
    </>
  );
}

export default MobileNav;
