import React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { getUser } from 'redux/user/userOperations';
function UserNavigation() {
  const name = useSelector(selectUserName);
const dispatch = useDispatch()
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
      <IconButton size="large" aria-label="account of current user" color="inherit" onClick={() => dispatch(getUser())}>
        <NavLink to="/user">
          <Avatar />
        </NavLink>
      </IconButton>
      <div>{name}</div>
    </Box>
  );
}

export default UserNavigation;
