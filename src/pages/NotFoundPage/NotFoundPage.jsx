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
          sx={{
            display: 'flex',
            m: 'auto',
            mt: '220px',
            width: '248px',
            borderRadius: '40px',
          }}
          endIcon={<PawPrint fill="white" />}
        >
          <NavLink to={'/'}>To main page</NavLink>
        </Button>
      </Container>
    </>
  );
}

export default NotFoundPage;
