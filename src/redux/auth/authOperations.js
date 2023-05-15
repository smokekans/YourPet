import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCurrentUser } from 'redux/user/userOperations';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('auth/register', credentials);
      const { email, password } = credentials;
      await dispatch(
        login({
          email,
          password,
        })
      );
    } catch (error) {
      toast.error("Missing or not valid field password or email");
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      console.log(data);
      token.set(data.token);
      dispatch(getCurrentUser());
      return data;
    } catch (error) {
      toast.error("Missing or not valid field password");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      token.set(value);
      await axios.post('auth/logout');
      token.unset();
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshThunk = createAsyncThunk(
//   'user/refresh',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('user/', credentials);
//       token.set(data.data.user.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
