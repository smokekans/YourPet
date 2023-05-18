import { Box, Container } from '@mui/material';
import React from 'react';
import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import styles from './styles';
import { Typography } from '@mui/material';
// import ModalCongrats from 'components/Modal/ModalCongrats/ModalCongrats';
// import { useSelector } from 'react-redux';
// import { getIsNewUser } from 'redux/auth/authSelectors';

function UserPage() {
  // const isNewUser = useSelector(getIsNewUser);
  return (
    <>
      <Container sx={{ mt: '62px', justifyContent: 'center', display: 'grid' }}>
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
      {/* {isNewUser ? <ModalCongrats /> : null} */}
    </>
  );
}

export default UserPage;
