import { Box, Container, Dialog, styled } from '@mui/material';
import React, { useState } from 'react';
import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';
import styles from './styles';
import { Typography } from '@mui/material';
import ModalCongrats from 'components/Modal/ModalCongrats/ModalCongrats';
import { useDispatch, useSelector } from 'react-redux';
import { getIsNewUser } from 'redux/auth/authSelectors';
import { setIsNewUser } from 'redux/auth/authSlice';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '20px',
    '@media (min-width: 768px)': { borderRadius: '40px' },
    p: 0,
  },
  '& .MuiDialogContent-root': {
    padding: '0px 0px 12px 0px',
  },
  '& .MuiDialogActions-root': {
    flexDirection: 'column',
    gap: '9px',
    paddingBottom: '40px',
    // '@media (min-width: 768px)': {
      
    // },
  },
}));

function UserPage() {
    const dispatch = useDispatch();
  const isNewUser = useSelector(getIsNewUser);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onClose = () => {
    setIsModalOpen(!isModalOpen);
    dispatch(setIsNewUser(!isNewUser));
  };

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
      {isNewUser ?  <BootstrapDialog
              open={isModalOpen}
              onClose={onClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-descriptionDialogActions"
            >
              <ModalCongrats
                onClick={onClose}
              />
            </BootstrapDialog> : null}
    </>
  );
}

export default UserPage;
