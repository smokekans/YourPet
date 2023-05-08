import { Container } from '@mui/material';
import React from 'react';
import UserData from '../../components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
function UserPage() {
  return (
    <>
      <Container>
        <div>UserPage</div>
        <UserData />
        <PetsData />
      </Container>
    </>
  );
}

export default UserPage;
