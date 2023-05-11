import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk('get/news', async (query, { rejectWithValue }) => {
  try {
    if (query === undefined || query === '') {
      const { data } = await axios.get('news?page=1&limit=6');
      return data;
    }
    if (query) {
      const { data } = await axios.get(`news/title?title=${query}&page=1&limit=6`);
      return data;
    }
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
