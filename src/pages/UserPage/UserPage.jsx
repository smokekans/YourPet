import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserData from 'components/User/UserData/UserData';

import PetsData from 'components/Pets/PetsData/PetsData';
import Loader from './loader';
import {isLoading} from '../../redux/user/userSelectors'
import styled from './styledUser';
import { Typography,Button } from '@mui/material';


function UserPage() {


  const Loading = useSelector(isLoading);
  return (
    <div>
      <Container sx={styled.headlines}>
      <Typography variant="h2" sx={styled.information}>My information:</Typography>
      <Typography variant="h2" sx={styled.pets}> My pets:

<Button sx={styled.btnAdd}>Add pets   +</Button></Typography>
      </Container>
      
    {Loading?<Loader/>:<Container sx={styled.container}>
        <UserData />
        <PetsData />
      </Container>}
      
    </div>
  );

}

export default UserPage;
