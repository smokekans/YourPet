import { Button, Container, Link, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';
import { ReactComponent as PawPrint } from '../../images/icons/pawprint.svg';
import { NavLink as RouterLink } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Container sx={styles.imageNF}>
        <Typography variant="h3" sx={styles.title}>
          Ooops!
          <br />
          This page not found :(
        </Typography>
        <Button
          variant="contained"
          sx={styles.button}
          endIcon={<PawPrint fill="white" />}
        >
          <Link
            component={RouterLink}
            to="/"
            sx={{ color: 'text.light' }}
            underline="none"
          >
            home page
          </Link>
        </Button>
      </Container>
    </>
  );
}

export default NotFound;
