// import React, {useDispatch } from 'react';
import UserData from '../../components/User/UserData/UserData';
import PetsData from 'components/Pets/PetsData/PetsData';

import { useSelector } from 'react-redux';
import { isLoading } from '../../redux/user/userSelectors';
import Loading from './loader';
function UserPage() {
  const loading = useSelector(isLoading);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          UserPage
          <UserData />
          <PetsData />
        </div>
      )}
    </div>
  );
}

export default UserPage;
