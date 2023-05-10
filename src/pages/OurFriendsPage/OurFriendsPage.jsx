import Loader from 'components/Loader/Loader';
import OurFriendsList from 'components/OurFriends/OurFriendsList/OurFriendsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from 'redux/friends/friendsOperations';
import { selectIsisLoaded } from 'redux/friends/friendsSelectors';

function OurFriendsPage() {
  const dispatch = useDispatch();

  const isLoad = useSelector(selectIsisLoaded);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <>
      <h2>Our friends</h2>
      {isLoad ? <OurFriendsList /> : <Loader />}
    </>
  );
}

export default OurFriendsPage;
