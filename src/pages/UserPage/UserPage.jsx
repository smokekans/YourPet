import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserData from '../../components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import Loader from './loader';
import { isLoading } from '../../redux/user/userSelectors';
import styled from './styledUser';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function UserPage() {
  const Loading = useSelector(isLoading);
  return (
    <div>
      <Container sx={styled.headlines}>
        <Typography variant="h2" sx={styled.information}>
          My information:
        </Typography>
        <Typography variant="h2" sx={styled.pets}>
          {' '}
          My pets:
          <NavLink to="/add-pet" sx={styled.btnAdd}>
            Add pets +
          </NavLink>
        </Typography>
      </Container>

      {Loading ? (
        <Loader />
      ) : (
        <Container sx={styled.container}>
          <UserData />
          <PetsData />
        </Container>
      )}
    </div>
  );
}

export default UserPage;
