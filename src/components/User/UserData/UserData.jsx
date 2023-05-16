import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { updateAvatar } from 'redux/user/userOperations';
import { getAvatar,isLoading } from 'redux/user/userSelectors';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { Button, Avatar, FilledInput, Container } from '@mui/material';
import styles from './styles';
import { ReactComponent as PawPrint } from '../../../images/icons/camera.svg';
function UserData() {
  const dispatch = useDispatch();
  const avatarUser = useSelector(getAvatar);
  const avatar = useRef(null);
  // console.log(avatarUser);
  const Loading = useSelector(isLoading);
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
        <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton color="primary" aria-label="upload picture" component="label" onClick={handelAvatar}>
        
        <PawPrint
                    className="name"
                    
                    edge="end"
                  ></PawPrint>
      </IconButton>
      <Button variant="contained" component="label" onClick={handelAvatar}>
      Edit photo
        <input hidden accept="image/*" multiple type="file" />
      </Button>
     
    </Stack>
        {/* <Button onClick={handelAvatar}>Button</Button> */}
        {Loading?<div></div>:<UserDataItem />}
        
      </div>
      <UserLogOut />
    </Container>
  );
}

export default UserData;
