import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';
import styled from './styledUserDataItem';
import { Typography,Input,Button } from '@mui/material';
import { ReactComponent as PawPrint } from '../../../images/icons/edit.svg';

function UserDataItem() {
  const user = useSelector(getUser);
  const changeData = e => {
    console.log(e.currentTarget);
  };

  const { name, birthday, email, phone, city } = user;
  return (
    <div>
      <Typography variant="div" sx={styled.ul}>
        <Typography variant="p"className="name" sx={styled.li}>
          Name: <Input type="text"  defaultValue={name} className="name" sx={styled.input}/>
          <Button  sx={styled.btn} onClick={changeData} startIcon={<PawPrint  />}></Button>
        </Typography>
        <Typography variant="p"className="email" sx={styled.li}>
          Email: <Input type="text" defaultValue={email} sx={styled.input}/>
          <Button sx={styled.btn} className="email" startIcon={<PawPrint  />}></Button>
        </Typography>
        <Typography variant="p"className="birthday" sx={styled.li}>
          Birthday: <Input type="text" defaultValue={birthday} sx={styled.input}/>
          <Button sx={styled.btn} className="birthday" startIcon={<PawPrint  />}></Button>
        </Typography>
        <Typography variant="p"className="phone" sx={styled.li}>
          Phone: <Input type="text" defaultValue={phone} sx={styled.input}/>
          <Button sx={styled.btn} className="phone" startIcon={<PawPrint  />}></Button>
        </Typography>
        <Typography variant="p"className="city" sx={styled.li}>
          City: <Input type="text" defaultValue={city}sx={styled.input}/>
          <Button sx={styled.btn} className="city" startIcon={<PawPrint  />}></Button>
        </Typography>
      </Typography>
    </div>
  );
}

export default UserDataItem;
