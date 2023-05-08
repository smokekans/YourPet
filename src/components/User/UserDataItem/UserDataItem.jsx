import React from 'react';
import { useSelector } from 'react-redux'

import {getUser} from '../../../redux/auth/authSelectors'
function UserDataItem() {
  const user = useSelector(getUser)
  const {name, birthday,email,phone,city, }= user
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
