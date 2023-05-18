import React from 'react';
import AddPetForm from 'components/AddPetForm/AddPetForm';
import { ToastContainer } from 'react-toastify';
import { Container } from '@mui/material';
import styles from './styles';

function AddPetPage() {
  return (
    <>
        <Container sx={styles.bgPaws}>
        <AddPetForm />
        <ToastContainer />
      </Container>
    </>
  );
}

export default AddPetPage;
