import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';


export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticeByCategory',
  async ({ category = 'sell' }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices?category=${category}`);
      console.log(data)
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    };
  }
);

export const getSingleNotice = createAsyncThunk(
  'notices/getSingleNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/:${id}`);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    };
  }
);

export const getNewNotice = createAsyncThunk(
  'notices/getNewNotice',
  async (newNotice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/notices/`, newNotice);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

