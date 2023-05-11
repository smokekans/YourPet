import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';

import styled from './styledUserData';
import { Avatar } from '@mui/material';
import { FilledInput } from '@mui/material';
import { Container } from '@mui/material';

function UserData() {
  const user = useSelector(getUser);

  const { image } = user;
  console.log(image)
  return (
    <Container sx={styled.container}>
      <div>
        
        <Avatar variant="img" src={image} sx={styled.images}  alt={image}/>
        <br />
        <FilledInput autoComplete='Edit photo' type="file" sx={styled.input}></FilledInput>
        <UserDataItem />
      </div>
      <UserLogOut />
    </Container>
  );
}

export default UserData;
