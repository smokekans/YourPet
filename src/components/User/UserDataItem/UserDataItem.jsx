import React from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import { getUser,isLoading } from '../../../redux/user/userSelectors';
import { updateInfoUser } from 'redux/user/userOperations';
import { useState } from "react";
import styles from './styles';
import {
  Typography,
  FormControl,
  FilledInput,
  InputAdornment,
} from '@mui/material';
import { ReactComponent as Pencel } from '../../../images/icons/edit.svg';
import { ReactComponent as Check } from '../../../images/icons/check.svg';

function UserDataItem() {
  const dispatch = useDispatch();
const [btnName,getName]= useState(true)
const [btnEmail,getEmail]= useState(true)
const [btnPhone,getPhone]= useState(true)
const [btnCity,getCity]= useState(true)
const [btnBirthday,getBirthday]= useState(true)
  const user = useSelector(getUser);
  const Loading = useSelector(isLoading);
  console.log(Loading);
  console.log(user);

  const updateInfo = {
    email: user.email,
    name: user.name,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  };

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
      <Typography variant="ul" sx={styles.ul}>
     
        <Typography variant="p" className="name" sx={styles.li}>
          Name:
          <FormControl variant="filled">
            <FilledInput
              id="name"
              sx={styles.input}
              onChange={ChangeData}
              defaultValue={name}
              endAdornment={
                <InputAdornment position="end">
                  {btnName?<Pencel
                className="name"
                onClick={()=>{getName(false)}}
                edge="end"
              ></Pencel> : <Check
              className="name"
              onClick={()=>{
                getName(true)
                handleClick()}}
              edge="end"
            ></Check>}
                 
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="email" sx={styles.li}>
          Email:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="email"
              type="email"
              sx={styles.input}
              onChange={ChangeData}
              defaultValue={email}
              endAdornment={
                <InputAdornment position="end">
                  {btnEmail?<Pencel
                className="name"
                onClick={()=>{getEmail(false)}}
                edge="end"
              ></Pencel> : <Check
              className="name"
              onClick={()=>{
                getEmail(true)
                handleClick()}}
              edge="end"
            ></Check>}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="birthday" sx={styles.li}>
          Birthday:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="birthday"
              type="data"
              sx={styles.input}
              onChange={ChangeData}
              defaultValue={birthday}
              endAdornment={
                <InputAdornment position="end">
                  {btnBirthday?<Pencel
                className="name"
                onClick={()=>{getBirthday(false)}}
                edge="end"
              ></Pencel> : <Check
              className="name"
              onClick={()=>{
                getBirthday(true)
                handleClick()}}
              edge="end"
            ></Check>}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="phone" sx={styles.li}>
          Phone:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="phone"
              sx={styles.input}
              onChange={ChangeData}
              defaultValue={phone}
              endAdornment={
                <InputAdornment position="end">
                 {btnPhone?<Pencel
                className="name"
                onClick={()=>{getPhone(false)}}
                edge="end"
              ></Pencel> : <Check
              className="name"
              onClick={()=>{
                getPhone(true)
                handleClick()}}
              edge="end"
            ></Check>}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="city" sx={styles.li}>
          City:{' '}
          <FormControl variant="filled">
            <FilledInput
              id="city"
              sx={styles.input}
              onChange={ChangeData}
              defaultValue={city}
              endAdornment={
                <InputAdornment position="end">
                  {btnCity?<Pencel
                className="name"
                onClick={()=>{getCity(false)}}
                edge="end"
              ></Pencel> : <Check
              className="name"
              onClick={()=>{
                getCity(true)
                handleClick()}}
              edge="end"
            ></Check>}
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
