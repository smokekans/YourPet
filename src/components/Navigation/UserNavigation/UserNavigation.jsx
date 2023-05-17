import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/user/userOperations';
import { ReactComponent as User } from '../../../images/icons/user.svg';
import styles from './styles';

function UserNavigation() {
  const dispatch = useDispatch();
  return (
    <Box sx={styles.userBox}>
      <NavLink to="/user">
        <User onClick={() => dispatch(getCurrentUser())} />
      </NavLink>
    </Box>
  );
}

export default UserNavigation;
