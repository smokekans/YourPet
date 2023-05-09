// import React, {useDispatch } from 'react';
import UserData from '../../components/User/UserData/UserData'
import PetsData from 'components/Pets/PetsData/PetsData';
// import { getUser } from 'redux/user/userOperations';

function UserPage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
 

  return <><div>UserPage
<UserData/>
<PetsData/>
  </div></>;
}

export default UserPage;
