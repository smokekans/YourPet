import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/friends');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
