import React from 'react';

import { Container, Typography } from '@mui/material';
import styled from './styled';

function MainPage() {
  return (
    <>
      <Container sx={styled.animal}>
        <Typography variant="h3" sx={styled.title}>
          Take good care of your small pets
        </Typography>
      </Container>

    </>
    
  );
}

export default MainPage;
