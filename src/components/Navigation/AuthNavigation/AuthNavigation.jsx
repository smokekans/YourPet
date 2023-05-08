import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink as Routerlink } from 'react-router-dom';

function AuthNavigation() {
  return (
    <Box mr={1}>
      <Button
        component={Routerlink}
        to="/login"
        variant="outlined"
        color="accent"
        sx={{
          height: 40,
          width: 165,
          borderRadius: 5,
          border: 2,
          '&:hover': {
            border: 2,
          },
          '&.active': {
            backgroundColor: 'accent.main',
            color: 'text.light',
            borderColor: 'accent.main',
          },
        }}
      >
        Log IN
      </Button>
      <Button
        component={Routerlink}
        to="/register"
        variant="outlined"
        color="accent"
        sx={{
          height: 40,
          width: 165,
          borderRadius: 5,
          border: 2,
          '&:hover': {
            border: 2,
          },
          '&.active': {
            backgroundColor: 'accent.main',
            color: 'text.light',
            borderColor: 'accent.main',
          },
        }}
      >
        Registration
      </Button>
    </Box>
  );
}

export default AuthNavigation;

// const itemsNav = [
//   { href: '/login', text: 'Log IN' },
//   { href: '/register', text: 'Registration' },
// ];
// <ul>
//   {itemsNav.map(({ href, text }) => (
//     <li key={href}>
//       <NavLink to={href}>{isMobile ? <button text={text} /> : <button text={text} />}</NavLink>
//     </li>
//   ))}
// </ul>
