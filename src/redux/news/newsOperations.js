import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
  'get/news',
  async ({ query, page = 1, limit = 6 }, { rejectWithValue }) => {
    try {
      if (query === undefined || query === '') {
        const { data } = await axios.get(`news?page=${page}&limit=${limit}`);
        return data;
      }
      if (query) {
        const { data } = await axios.get(`news/title?title=${query}&page=${page}&limit=${limit}`);
        return data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
