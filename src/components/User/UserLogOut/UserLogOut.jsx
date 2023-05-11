import React from 'react';
import {logout} from '../../../redux/auth/authOperations'
import { useDispatch} from 'react-redux';

function UserLogOut() {
  const dispatch = useDispatch();
  
  return <><button onClick={() => dispatch(logout())}>Log Out</button></>;
}

export default UserLogOut;
