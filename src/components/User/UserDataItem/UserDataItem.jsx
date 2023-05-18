import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';
import { updateInfoUser } from 'redux/user/userOperations';
import { useState } from 'react';
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
  const [btnName, getName] = useState(true);
  const [btnEmail, getEmail] = useState(true);
  const [btnPhone, getPhone] = useState(true);
  const [btnCity, getCity] = useState(true);
  const [btnBirthday, getBirthday] = useState(true);
  const nameUser = useRef(null);
  const nameEmail = useRef(null);
  const namePhone = useRef(null);
  const nameCity = useRef(null);
  const nameBirtday = useRef(null);
  const user = useSelector(getUser);
 
  

  function clickName() {
    nameUser.current.focus()
    getName(false);
  }function clickEmail() {
    nameEmail.current.focus()
    getEmail(false);
  }function clickPhone() {
    namePhone.current.focus()
    getPhone(false);
  }function clickCity() {
    nameCity.current.focus()
    getCity(false);
  }function clickBirthday() {
    nameBirtday.current.focus()
    getBirthday(false);
  }

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
      <Typography variant="div" sx={styles.ul}>
        <Typography variant="p" className="name" sx={styles.li}>
          Name:
          <FormControl variant="filled" sx={{ml:'auto',}}>
            <FilledInput
              id="name"
              sx={styles.input}
              onChange={ChangeData}
              inputRef={nameUser}
              defaultValue={name}
             
              endAdornment={
                <InputAdornment position="end" sx={{pt:'12px'}}>
                  {btnName ? (
                    <Pencel
                      className="name"
                      onClick={() => {
                        clickName()
                        
                      }}
                      edge="end"
                    ></Pencel>
                  ) : (
                    <Check
                      className="name"
                      stroke="#54ADFF"
                      onClick={() => {
                        getName(true);
                        handleClick();
                      }}
                      edge="end"
                    ></Check>
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="email" sx={styles.li}>
          Email:
          <FormControl variant="filled" sx={{ml:'auto',}}>
            <FilledInput
              id="email"
              type="email"
              sx={styles.input}
              onChange={ChangeData}
              inputRef={nameEmail}
              defaultValue={email}
              endAdornment={
                <InputAdornment position="end" sx={{pt:'12px'}}>
                  {btnEmail ? (
                    <Pencel
                    
                      className="name"
                      onClick={() => {
                        clickEmail()
                      }}
                      edge="end"
                    ></Pencel>
                  ) : (
                    <Check
                      className="name"
                      stroke="#54ADFF"
                      onClick={() => {
                        getEmail(true);
                        handleClick();
                      }}
                      edge="end"
                    ></Check>
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="birthday" sx={styles.li}>
          Birthday:{' '}
          <FormControl variant="filled" sx={{ml:'auto',}}>
            <FilledInput
              id="birthday"
              type="data"
              sx={styles.input}
              onChange={ChangeData}
              inputRef={nameBirtday}
              defaultValue={birthday}
              endAdornment={
                <InputAdornment position="end" sx={{pt:'12px'}}>
                  {btnBirthday ? (
                    <Pencel
                      className="name"
                      onClick={() => {
                        clickBirthday()
                      }}
                      edge="end"
                    ></Pencel>
                  ) : (
                    <Check
                      className="name"
                      stroke="#54ADFF"
                      onClick={() => {
                        getBirthday(true);
                        handleClick();
                      }}
                      edge="end"
                    ></Check>
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="phone" sx={styles.li}>
          Phone:{' '}
          <FormControl variant="filled"  sx={{ml:'auto',}}>
            <FilledInput
              id="phone"
              sx={styles.input}
              onChange={ChangeData}
              inputRef={namePhone}
              defaultValue={phone}
              endAdornment={
                <InputAdornment position="end" sx={{pt:'12px'}}>
                  {btnPhone ? (
                    <Pencel
                      className="name"
                      onClick={() => {
                        clickPhone()
                      }}
                      edge="end"
                    ></Pencel>
                  ) : (
                    <Check
                      className="name"
                      stroke="#54ADFF"
                      onClick={() => {
                        getPhone(true);
                        handleClick();
                      }}
                      edge="end"
                    ></Check>
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        </Typography>
        <Typography variant="p" className="city" sx={styles.li}>
          City:{' '}
          <FormControl variant="filled" sx={{ml:'auto',}}>
            <FilledInput
              id="city"
              sx={styles.input}
              onChange={ChangeData}
              inputRef={nameCity}
              defaultValue={city}
              endAdornment={
                <InputAdornment position="end" sx={{pt:'12px'}}>
                  {btnCity ? (
                    <Pencel
                      className="name"
                      onClick={() => {
                        clickCity()
                      }}
                      edge="end"
                    ></Pencel>
                  ) : (
                    <Check
                      className="name"
                      stroke="#54ADFF"
                      onClick={() => {
                        getCity(true);
                        handleClick();
                      }}
                      edge="end"
                    ></Check>
                  )}
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
// '&::before': {
//       borderBottom: 'none',
//     },
//     '&:hover::before': {
//       borderBottom: 'none',
//     },