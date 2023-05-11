import React from 'react';
import {logout} from '../../../redux/auth/authOperations'
import { useDispatch} from 'react-redux';
import { Button,} from '@mui/material';
import { ReactComponent as Logout } from '../../../images/icons/logout.svg'
import styled from '../UserDataItem/styledUserDataItem';
function UserLogOut() {
  const dispatch = useDispatch();
  
  return <>
   <Button
          
          sx={styled.btnLogOut}
          startIcon={<Logout  />}
          onClick={() => dispatch(logout())}
        >
          Log Out
        </Button>
</>
}

export default UserLogOut;
