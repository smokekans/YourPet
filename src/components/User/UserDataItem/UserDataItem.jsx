import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';

function UserDataItem() {
  const user = useSelector(getUser);
  const changeData = e => {
    console.log(e.currentTarget);
  };

  const { name, birthday, email, phone, city } = user;
  return (
    <div>
      <ul>
        <li className="name">
          Name: <input type="text" value={name} className="name" />
          <button onClick={changeData}>+</button>
        </li>
        <li>
          Email: <input type="text" value={email} />
          <button className="email">+</button>
        </li>
        <li>
          Birthday: <input type="text" value={birthday} />
          <button className="birthday">+</button>
        </li>
        <li>
          Phone: <input type="text" value={phone} />
          <button className="phone">+</button>
        </li>
        <li>
          City: <input type="text" value={city} />
          <button className="city">+</button>
        </li>
      </ul>
    </div>
  );
}

export default UserDataItem;
