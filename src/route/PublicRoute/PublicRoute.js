import { useSelector } from 'react-redux';
import { getAccessToken } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const accessToken = useSelector(getAccessToken);

  const shouldRedirect = accessToken && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
