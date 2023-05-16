import React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './styles';

function MainPage() {
  return (
    <>
      <Container sx={styles.animal}>
        <Typography variant="h3" sx={styles.title}>
          Take good care of your small pets
        </Typography>
      </Container>
    </>
  );
}

export default MainPage;
