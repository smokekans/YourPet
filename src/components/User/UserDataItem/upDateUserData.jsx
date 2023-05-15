import { useSelector } from 'react-redux';
import { getUser } from 'redux/user/userSelectors';


  const ChangeData = e => {
    const user = useSelector(getUser);

    const updateInfo = {
      email: user.email,
      name: user.name,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
  }
  
   const id = e.currentTarget.children[0].id
    const value = e.currentTarget.children[0].value
   
    if(id === 'name'){
      updateInfo.name = value
    }
    console.log(updateInfo)
  };
  export default ChangeData