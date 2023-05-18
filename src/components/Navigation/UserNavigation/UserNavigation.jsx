import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/user/userOperations';
import { ReactComponent as User } from '../../../images/icons/user.svg';
import styles from './styles';
import { getNameUser } from 'redux/user/userSelectors';

function UserNavigation() {
  const dispatch = useDispatch();
  const name = useSelector(getNameUser);
  return (
    <Box sx={styles.userBox}>
      <NavLink to="/user">
        <User onClick={() => dispatch(getCurrentUser())} />
      </NavLink>
      <>{name}</>
    </Box>
  );
}

export default UserNavigation;
