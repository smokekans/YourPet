import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRoute = ({ restricted = false, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
