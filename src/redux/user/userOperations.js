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

export const getUser = createAsyncThunk(
  'user/current',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user/current', credentials);
      
      // console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
