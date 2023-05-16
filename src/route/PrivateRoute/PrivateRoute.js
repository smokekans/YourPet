import { useSelector } from 'react-redux';
import { getAccessToken } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const accessToken = useSelector(getAccessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};
