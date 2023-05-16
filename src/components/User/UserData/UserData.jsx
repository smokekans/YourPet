import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { updateAvatar } from 'redux/user/userOperations';
import { getAvatar } from 'redux/user/userSelectors';
import { Button, Avatar, FilledInput, Container } from '@mui/material';
import styles from './styles';

function UserData() {
  const dispatch = useDispatch();
  const avatarUser = useSelector(getAvatar);
  const avatar = useRef(null);
  // console.log(avatarUser);

  function OnSumbit(e) {
    const avatars = e.target.files[0];
    dispatch(updateAvatar({ avatar: avatars }));
  }

  function handelAvatar() {
    avatar.current.click();
  }

  return (
    <Container sx={styles.container}>
      <div>
        <Avatar
          variant="img"
          src={avatarUser}
          sx={styles.images}
          alt={avatarUser}
        />

        <br />
        <FilledInput
          autoComplete="Edit photo"
          inputRef={avatar}
          type="file"
          sx={styles.input}
          onChange={OnSumbit}
        ></FilledInput>
        <Button onClick={handelAvatar}>Button</Button>

        <UserDataItem />
      </div>
      <UserLogOut />
    </Container>
  );
}

export default UserData;
