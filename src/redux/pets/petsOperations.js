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

export const addUserPet = createAsyncThunk('/pets', async userData => {
  try {
    const response = await axios.post('/add-pet', userData);
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
});
