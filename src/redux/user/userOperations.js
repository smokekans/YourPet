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
      const { data } = await axios.get('user/current', credentials);
      
      console.log(data)
      return data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const getUser = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const value = getState().auth.token;
//       if (value === null) {
//         return rejectWithValue('Unable to fetch user');
//       }
//       token.set(value);
//       const { data } = await axios.get('users/current');
//       console.log(data)
//       return data;
//     } catch (e) {
//       console.log(e.response.data);
//       return rejectWithValue(e.message);
//     }
//   }
// );