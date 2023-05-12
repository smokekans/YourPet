import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import styled from './styled';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PawPrint } from '../../images/icons/pawprint.svg';

function NotFoundPage() {
  return (
    <>
      <Container sx={styled.image}>
        <Typography variant="h3" sx={styled.title}>
          Ooops!
          <br />
          This page not found :(
        </Typography>
        <Button
          variant="contained"
          sx={styled.button}
          startIcon={<PawPrint fill="green" />}
        >
          <NavLink to={'/'}>To main page</NavLink>
        </Button>
      </Container>
    </>
  );
}

export default NotFoundPage;
