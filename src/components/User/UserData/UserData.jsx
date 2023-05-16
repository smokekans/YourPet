import {
  useSelector,
  // useDispatch
} from 'react-redux';
import { useRef } from 'react';
import { getAvatar } from '../../../redux/user/userSelectors';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { Button } from '@mui/material';
import styles from './styles';
import { Avatar } from '@mui/material';
import { FilledInput } from '@mui/material';
import { Container } from '@mui/material';
// import { updateAvatar } from '../../../redux/user/userOperations';

function UserData() {
  // const dispatch = useDispatch();
  const avatarUser = useSelector(getAvatar);
  const avatar = useRef(null);
  console.log(avatarUser);
  function OnSumbit(e) {
    // const avatars = e.target.files[0];
    // useEffect(() => {
    //   dispatch(updateAvatar({ avatar: avatars }));
    // }, [dispatch, avatars]);
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
