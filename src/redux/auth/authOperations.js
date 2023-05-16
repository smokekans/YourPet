import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCurrentUser } from 'redux/user/userOperations';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
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
      toast.error('Missing or not valid field password or email');
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      accessToken.set(data.accessToken);
      dispatch(getCurrentUser());
      return data;
    } catch (error) {
      toast.error('Missing or not valid field password');
      return rejectWithValue(error.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/google', credentials);
      accessToken.set(data.accessToken);
      return data;
    } catch (error) {
      toast.error('Missing or not valid field password');
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      accessToken.set(value);
      await axios.post('auth/logout');
      accessToken.unset();
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refresh',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('auth/refresh', credentials);
      accessToken.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
