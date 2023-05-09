import React from 'react';
import { useSelector } from 'react-redux'
import {getNameUser} from '../../../redux/user/userSelectors'

function UserDataItem() {
  const user = useSelector(getNameUser)
  const {name, birthday,email,phone,city, }= user.user
  return <div>
    <ul>
<li>Name: < input  type="text"value={name}/></li>
<li>Email: <input  type="text"value={email}/></li>
<li>Birthday: <input type="text" value={birthday}/></li>
<li>Phone: <input  type="text"value={phone}/></li>
<li>City: <input type="text" value={city}/></li></ul>
  </div>;
}

export default UserDataItem;
