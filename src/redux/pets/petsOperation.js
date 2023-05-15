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
// змінила назву з getPet на getFriends
export const getFriends = createAsyncThunk(
  'current/user',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.get('/user/current', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// додає картку улюбленця
export const createPet = createAsyncThunk(
  'pets/create',
  async ({ values, token, image }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post(
        '/pets',
        { ...values, formData },
        header
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
