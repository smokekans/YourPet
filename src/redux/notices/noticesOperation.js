import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';


export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticeByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      return response.data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
