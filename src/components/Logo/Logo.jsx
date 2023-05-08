import React from 'react';
import LogoPng from '../../images/logo/logo.png';
import LogoMobile from '../../images/logo/logo-mobile.png';
import useMatchMedia from 'hooks/useMatchMedia';
import { Link } from '@mui/material';
import { NavLink as Routerlink } from 'react-router-dom';

function Logo() {
  const { isMobile } = useMatchMedia();

  return (
    <Link
      href="/"
      component={Routerlink}
      to="/"
      underline="none"
      color="black"
      // sx={{ ml: 2, mt: 4 }}
    >
      {isMobile ? <img src={LogoMobile} alt="Logo" /> : <img src={LogoPng} alt="Logo" />}
    </Link>
    // <div>{isMobile ? <img src={LogoMobile} alt="Logo" /> : <img src={LogoPng} alt="Logo" />}</div>
  );
}
export default Logo;
