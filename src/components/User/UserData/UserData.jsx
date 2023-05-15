import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { getUser } from '../../../redux/user/userSelectors';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';
import { Button } from '@mui/material';
import styled from './styledUserData';
import { Avatar } from '@mui/material';
import { FilledInput } from '@mui/material';
import { Container } from '@mui/material';
import { updateAvatar } from '../../../redux/user/userOperations';

function UserData() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const avatar = useRef(null);

  function OnSumbit(e) {
    const avatars = e.target.files[0];

    dispatch(updateAvatar({ avatar: avatars }));
  }

  function handelAvatar() {
    avatar.current.click();
  }

  const { image } = user;
  console.log(image);
  return (
    <Container sx={styled.container}>
      <div>
        <Avatar variant="img" src={image} sx={styled.images} alt={image} />
        <br />
        <FilledInput
          autoComplete="Edit photo"
          inputRef={avatar}
          type="file"
          sx={styled.input}
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
