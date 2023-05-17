import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { updateAvatar } from 'redux/user/userOperations';
import { getAvatar, isLoading } from 'redux/user/userSelectors';
import {
  Button,
  Avatar,
  FilledInput,
  Container,
  Box,
 
  Stack,
} from '@mui/material';
import styles from './styles';
import { ReactComponent as PawPrint } from '../../../images/icons/camera.svg';

function UserData() {
  const dispatch = useDispatch();
  const avatarUser = useSelector(getAvatar);
  const avatar = useRef(null);
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
      <Box sx={styles.boxContainer}>
        <Box>
        <Avatar
          variant="img"
          src={avatarUser}
          sx={styles.images}
          alt={avatarUser}
        />
        <FilledInput
          autoComplete="Edit photo"
          inputRef={avatar}
          type="file"
          sx={styles.input}
          onChange={OnSumbit}
        ></FilledInput>
        <Stack direction="row" alignItems="center" spacing={2}>
        
          <Button variant="contained" sx={styles.editPhoto} component="label" onClick={handelAvatar} startIcon={<PawPrint sx={styles.editPhotoIcon}/>}>
            Edit photo
            
          </Button>
        </Stack>
        </Box>
       
        {Loading ? <div></div> : <UserDataItem />}
      </Box>
      <UserLogOut />
    </Container>
  );
}

export default UserData;
