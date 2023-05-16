import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/user/userOperations';
import { ReactComponent as User } from '../../../images/icons/user.svg';

function UserNavigation() {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        // ml: 'auto',
        ml: { tablet: '22px', desktop: 'auto' },
        display: 'flex',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // bgcolor: 'background.default',
        // flexDirection: 'row',
      }}
    >
      <NavLink to="/user">
        <User onClick={() => dispatch(getCurrentUser())} />
      </NavLink>
    </Box>
  );
}

export default UserNavigation;
