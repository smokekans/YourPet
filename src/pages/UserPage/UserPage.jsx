import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserData from '../../components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import Loader from './loader';
import {isLoading} from '../../redux/user/userSelectors'
function UserPage() {


  const Loading = useSelector(isLoading);
  return (
    <>
    {Loading?<Loader/>:<Container>
        <UserData />
        <PetsData />
      </Container>}
      
    </>
  );

}

export default UserPage;
