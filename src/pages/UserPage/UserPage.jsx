import { Box, Container } from '@mui/material';
import React from 'react';
import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import styles from './styles';
import { Typography } from '@mui/material';


function UserPage() {
  return (
    <>
      <Container sx={{mt:"62px",}}>
        <Box sx={styles.headlines}>
          <Typography variant="h2" sx={styles.information}>
            My information:
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
