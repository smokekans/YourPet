import React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';

function UserNavigation() {
  const name = useSelector(selectUserName);

  return (
    <Box
      sx={{
        display: 'flex',
        // flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.default',
        flexDirection: 'row',
      }}
    >
      <IconButton size="large" aria-label="account of current user" color="inherit">
        <NavLink to="/user">
          <Avatar />
        </NavLink>
      </IconButton>
      <div>{name}</div>
    </Box>
  );
}

export default UserNavigation;
