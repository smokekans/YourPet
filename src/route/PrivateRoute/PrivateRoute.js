import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
