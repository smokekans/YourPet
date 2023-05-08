
// import {getUser} from '../../../redux/user/userOperations'
import { useSelector } from 'react-redux'
// import {getNameUser} from '../../../redux/user/userSelectors'
import {getUser} from '../../../redux/auth/authSelectors'
import UserLogOut from '../UserLogOut/UserLogOut'
import UserDataItem from '../UserDataItem/UserDataItem'

function UserData() {
 
 
//  const user =  getUser()
 const user = useSelector(getUser)
 const {image }= user
console.log(user)
  return <><div>
   <h2>My information:</h2> 
<img src={image} alt='' height='182' width='182'  /><br/>
<input type='file'></input>
<UserDataItem/>
  </div>
  <UserLogOut/>
  </>;
}

export default UserData;
