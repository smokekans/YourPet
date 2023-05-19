import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
