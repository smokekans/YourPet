import SharedLayout from 'components/SharedLayout/SharedLayout';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import MUI from 'pages/MUI/MUI';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import UserPage from 'pages/UserPage/UserPage';
import {
  Navigate,
  Route,
  Routes,
  // useLocation
} from 'react-router-dom';
import { PrivateRoute } from 'route/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'route/PublicRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/user/userOperations';
import { getAccessToken } from 'redux/auth/authSelectors';

export const App = () => {
  const accessToken = useSelector(getAccessToken);
  const dispatch = useDispatch();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);

  // useEffect(() => {
  //   const accessToken = queryParams.get('accessToken');
  //   const refreshToken = queryParams.get('refreshToken');
  //   console.log(accessToken, refreshToken);
  // }, [location.search]);

  // const [searchParams] = useSearchParams();
  //
  // const accessTokenGoogle = searchParams.get('accessToken');

  // useEffect(() => {
  //   if (accessToken !== null) {
  //     dispatch(addAccessToken(accessToken));
  //     accessToken.set(accessToken);
  //   }
  // }, [accessToken, dispatch]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [accessToken, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="/notices/">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="mui" element={<MUI />} />

          <Route
            path=""
            element={<PublicRoute redirectTo="notices/sell" restricted />}
          >
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="user" element={<UserPage />} />
            <Route path="add-pet" element={<AddPetPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
