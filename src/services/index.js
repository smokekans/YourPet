import axios from 'axios';
import { store } from 'redux/store';
import { refreshToken } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api/';

export * from '../redux/auth/authOperations';
export * from '../redux/friends/friendsOperations';
export * from '../redux/news/newsOperations';
export * from '../redux/notices/noticesOperations';
export * from '../redux/pets/petsOperations';
export * from '../redux/user/userOperations';

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(refreshToken());
    }

    return Promise.reject(error);
  }
);
