import React from 'react';
import { useSelector } from 'react-redux';
import { getAccessToken } from 'redux/auth/authSelectors';
import { Box, Button, Container } from '@mui/material';
import styles from './styles';
import AddPetButton from 'components/Button/AddPetButton/AddPetButton';
import { NavLink as Routerlink } from 'react-router-dom';

const NoticesCategoriesNavigation = () => {
  const accessToken = useSelector(getAccessToken);

  return (
    <>
      <Container sx={styles.container}>
        <Box sx={styles.navigationContainer}>
          <Box sx={styles.linksContainer}>
            <Button
              sx={styles.link}
              component={Routerlink}
              to="/notices/sell"
              activeclassname="active"
            >
              sell
            </Button>
            <Button
              sx={styles.link}
              component={Routerlink}
              to="/notices/lost-found"
              activeclassname="active"
            >
              lost/found
            </Button>
            <Button
              sx={styles.link}
              component={Routerlink}
              to="/notices/for-free"
              activeclassname="active"
            >
              in good hands
            </Button>
            {accessToken && (
              <>
                <Button
                  sx={styles.link}
                  component={Routerlink}
                  to="/notices/favorite"
                  activeclassname="active"
                >
                  favorite ads
                </Button>
                <Button
                  sx={styles.link}
                  component={Routerlink}
                  to="/notices/owner"
                  activeclassname="active"
                >
                  my ads
                </Button>
              </>
            )}
          </Box>
          <AddPetButton />
        </Box>
      </Container>
    </>
  );
};

export default NoticesCategoriesNavigation;
