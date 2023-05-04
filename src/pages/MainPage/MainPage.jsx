import { Button } from '@mui/material';
import React from 'react';

function MainPage() {
  return (
    <>
      <div>MainPage</div>
      <Button
        sx={[
          {
            mr: 2,
            ml: 6,
            color: 'error.main',
            background:
              'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
            '&:hover': {
              color: 'success.main',
              background: 'error.main',
            },
          },
        ]}
        variant="contained"
      >
        polpoplo
      </Button>
    </>
  );
}

export default MainPage;
