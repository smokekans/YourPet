import { Container, Typography } from '@mui/material';
import React from 'react';
import styles from './styles';

function NotFoundNotices() {
  return (
    <>
      <Container sx={styles.imageNFN}>
        <Typography variant="h3" sx={styles.title}>
          Ooops!
          <br />
          Notices not found :(
        </Typography>
      </Container>
    </>
  );
}

export default NotFoundNotices;
