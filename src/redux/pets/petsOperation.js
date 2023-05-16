import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const accessToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
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
      await axios.get('/pets/current', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// додає картку улюбленця
export const createPet = createAsyncThunk(
  'pets/create',
  async ({ values, accessToken, avatar }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', values.name);
      formData.append('birthday', values.birthday);
      formData.append('breed', values.breed);
      formData.append('comments', values.comments);
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await axios.post('/pets', formData, avatar, header);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
