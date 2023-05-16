import { Container } from '@mui/material';
import React from 'react';
import AddPetForm from 'components/AddPetForm/AddPetForm';
import { ToastContainer } from 'react-toastify';

function AddPetPage() {
  return (
    <>
      <Container>
        <AddPetForm />
        <ToastContainer />
      </Container>
    </>
  );
}

export default AddPetPage;
