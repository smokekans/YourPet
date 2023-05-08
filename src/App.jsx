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
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'route/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'route/PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/:categoryName" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="mui" element={<MUI />} />

          <Route path="" element={<PublicRoute redirectTo="" restricted />}>
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
    </>
  );
};
