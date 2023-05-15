import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';
import styled from './styledUserDataItem';
import {
  Typography,
  FormControl,
  FilledInput,
  InputAdornment,
} from '@mui/material';
import { ReactComponent as PawPrint } from '../../../images/icons/edit.svg';

import { updateInfoUser } from 'redux/user/userOperations';

function UserDataItem() {
  const user = useSelector(getUser);
  console.log(user);
  const updateInfo = {
    email: user.email,
    name: user.name,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  };
  const dispatch = useDispatch();

  const ChangeData = e => {
    const id = e.currentTarget.id;

    const value = e.currentTarget.value;

    if (id === 'name') {
      updateInfo.name = value;
    } else if (id === 'email') {
      updateInfo.email = value;
    } else if (id === 'city') {
      updateInfo.city = value;
    } else if (id === 'birthday') {
      updateInfo.birthday = value;
    } else if (id === 'phone') {
      updateInfo.phone = value;
    }

    console.log(updateInfo);
    return updateInfo;
  };
  function handleClick() {
    dispatch(updateInfoUser(updateInfo));
  }
  const { name, birthday, email, phone, city } = user;
  return (
    <div>
      <Typography variant="ul" sx={styled.ul}>
        <Typography variant="p" className="name" sx={styled.li}>
          Name:
          <FormControl variant="filled">
            <FilledInput
              id="name"
              sx={styled.input}
              onChange={ChangeData}
              defaultValue={name}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="name"
                    onClick={handleClick}
                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="email" sx={styled.li}>
          Email:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="email"
              type="email"
              sx={styled.input}
              onChange={ChangeData}
              defaultValue={email}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="email"
                    onClick={handleClick}
                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="birthday" sx={styled.li}>
          Birthday:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="birthday"
              type="data"
              sx={styled.input}
              onChange={ChangeData}
              defaultValue={birthday}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="birthday"
                    onClick={handleClick}
                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="phone" sx={styled.li}>
          Phone:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="phone"
              sx={styled.input}
              onChange={ChangeData}
              defaultValue={phone}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="phone"
                    onClick={handleClick}
                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="city" sx={styled.li}>
          City:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="city"
              sx={styled.input}
              onChange={ChangeData}
              defaultValue={city}
              endAdornment={
                <InputAdornment position="end">
                  <PawPrint
                    className="city"
                    onClick={handleClick}
                    edge="end"
                  ></PawPrint>
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
      </Typography>
    </div>
  );
}

export default UserDataItem;
