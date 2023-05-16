import { Box, Container } from '@mui/material';
import React from 'react';
import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import styles from './styles';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function UserPage() {
  return (
    <>
      <Container>
        <Box sx={styles.headlines}>
          <Typography variant="h2" sx={styles.information}>
            My information:
          </Typography>
          <Typography variant="h2" sx={styles.pets}>
            My pets:
            <NavLink to="/add-pet" sx={styles.btnAdd}>
              Add pets +
            </NavLink>
          </Typography>
        </Box>
        <Box sx={styles.container}>
          <UserData />
          <PetsData />
        </Box>
      </Container>
    </>
  );
}

export default UserPage;
