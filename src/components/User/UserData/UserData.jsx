import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/user/userSelectors';
import UserLogOut from '../UserLogOut/UserLogOut';
import UserDataItem from '../UserDataItem/UserDataItem';

function UserData() {
  const user = useSelector(getUser);

  const { image } = user;
  console.log(image)
  return (
    <>
      <div>
        <h2>My information:</h2>
        <img src={image} alt="" height="182" width="182" />
        <br />
        <input type="file"></input>
        <UserDataItem />
      </div>
      <UserLogOut />
    </>
  );
}

export default UserData;
