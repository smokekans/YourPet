import { Container, Typography } from '@mui/material';
import Loader from 'components/Loader/Loader';
import OurFriendsList from 'components/OurFriends/OurFriendsList/OurFriendsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from 'redux/friends/friendsOperations';
import { getIsLoading } from 'redux/friends/friendsSelectors';
import styles from './styles';

function OurFriendsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <>
      <Container sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Our friends
        </Typography>
        {isLoading ? <OurFriendsList /> : <Loader />}
      </Container>
    </>
  );
}

export default OurFriendsPage;
