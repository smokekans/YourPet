import React from 'react';
import { useSelector } from 'react-redux';
import { getNameUser } from '../../../redux/user/userSelectors';


function changeData (e)  {
 
  console.log(e.currentTarget)
}


function UserDataItem() {

  const user = useSelector(getNameUser);

  const { name, birthday, email, phone, city } = user.user;
  return (
    <div>
      <ul>
        <li className="name">
          Name: <input type="text" value={name} className="name"/>
          <button  onClick={changeData}>+</button>
        </li>
        <li >
          Email: <input type="text" value={email} />
          <button className="email">+</button>
        </li>
        <li >
          Birthday: <input type="text" value={birthday} />
          <button className="birthday">+</button>
        </li>
        <li>
          Phone: <input type="text" value={phone} />
          <button  className="phone">+</button>
        </li>
        <li >
          City: <input type="text" value={city} />
          <button className="city">+</button>
        </li>
      </ul>
    </div>
  );
}

export default UserDataItem;
