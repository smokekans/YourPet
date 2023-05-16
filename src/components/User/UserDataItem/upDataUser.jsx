const ChangeData = e => {
  const updateInfo = {
    email: '',
    name: '',
    birthday: '',
    phone: '',
    city: '',
  };

  const id = e.currentTarget.children[0].id;
  const value = e.currentTarget.children[0].value;

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
export default ChangeData;
