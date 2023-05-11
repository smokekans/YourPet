import React from 'react';
import { ReactComponent as Logotype } from '../../images/logo/logo.svg';
import useMatchMedia from 'hooks/useMatchMedia';
import { Link, SvgIcon } from '@mui/material';
import { NavLink as Routerlink } from 'react-router-dom';

function Logo() {
  const { isMobile } = useMatchMedia();

  return (
    <Link href="/" component={Routerlink} to="/">
      {isMobile ? (
        <SvgIcon component={Logotype} inheritViewBox sx={{ width: 116 }} />
      ) : (
        <SvgIcon component={Logotype} inheritViewBox sx={{ width: 162 }} />
      )}
    </Link>
  );
}
export default Logo;
