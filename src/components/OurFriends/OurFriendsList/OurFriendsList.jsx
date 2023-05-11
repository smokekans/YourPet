import React from 'react';
import { useSelector } from 'react-redux';
import { selectFriends } from 'redux/friends/friendsSelectors';
import OurFriendsItem from '../OurFriendsItem/OurFriendsItem';
import styles from './styles';
import { Container, List } from '@mui/material';

function OurFriendsList() {
  const friends = useSelector(selectFriends);
  return (
    <>
      {friends && (
        <Container sx={styles.container}>
          <List sx={styles.list}>
            {friends[0] &&
              friends.map(friend => (
                <OurFriendsItem
                  key={friend._id}
                  avatar={
                    friend.imageUrl
                      ? friend.imageUrl
                      : 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sponsor-stamp-design-template-67630e7e4496c4e2a046fee0a7ab788c_screen.jpg?ts=1590769863'
                  }
                  title={friend.title}
                  site={friend.url}
                  addresssite={friend.addressUrl}
                  time={friend.workDays ? friend.workDays : []}
                  address={friend.address ? friend.address : 'website only'}
                  email={friend.email ? friend.email : 'website only'}
                  phone={friend.phone ? friend.phone : 'email only'}
                />
              ))}
          </List>
        </Container>
      )}
    </>
  );
}

export default OurFriendsList;
