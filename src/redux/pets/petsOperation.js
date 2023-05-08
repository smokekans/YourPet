import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getPets = createAsyncThunk(
  'current/user',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.get('user/current', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
