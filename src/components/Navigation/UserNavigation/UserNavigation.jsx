import React from 'react';
import { Avatar, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
// import { getNameUser } from 'redux/user/userSelectors';
import { getCurrentUser } from 'redux/user/userOperations';
// import { getName } from 'redux/auth/authSelectors';

function UserNavigation() {
  // const name = useSelector(getName);
  // console.log(name);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: 'background.default',
        flexDirection: 'row',
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        color="inherit"
        onClick={() => dispatch(getCurrentUser())}
      >
        <NavLink to="/user">
          <Avatar />
          {/* <p>{name}</p> */}
        </NavLink>
      </IconButton>
    </Box>
  );
}

export default UserNavigation;
