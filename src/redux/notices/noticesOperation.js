import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticeByCategory',
  async ({ category, page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/notices?category=${category}&page=${page}&limit=${limit}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSingleNotice = createAsyncThunk(
  'notices/getSingleNotice',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNewNotice = createAsyncThunk(
  'notices/getNewNotice',
  async (newNotice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/notices/`, newNotice);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNotices = createAsyncThunk(
  'notices/addNotices',
  async (newNotice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/notices`, newNotice);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      await axios.delete(`notices/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserNotices = createAsyncThunk(
  'notices/getUserNotices',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`notices/user`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNoticesByQwery = createAsyncThunk(
  'notices/getNoticesByQwery',
  async ({ query, category, page = 1, limit = 0 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/find?title=${query}&category=${category}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// додає оголошення
export const createNotice = createAsyncThunk(
  'notices/create',
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
        '/notices',
        { ...values, formData },
        header
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getNoticesByQweryOwner = createAsyncThunk(
  'notices/getNoticesByQweryOwner',
  async ({ query, page = 1, limit = 0 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/owner?title=${query}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNoticesByQweryFavorite = createAsyncThunk(
  'notices/getNoticesByQweryFavorite',
  async ({ query, page = 1, limit = 0 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/favorite?title=${query}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
