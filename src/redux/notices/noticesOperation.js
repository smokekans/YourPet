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
  async ({ query, category, page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/find?title=${query}&category=${category}&page=${page}&limit=${limit}`
      );
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// додає оголошення
export const createNotice = createAsyncThunk(
  'notices/create',
  async ({ values, accessToken, avatar }, thunkAPI) => {
    console.log(avatar);
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('category', values.category);
      formData.append('title', values.title);
      formData.append('name', values.name);
      formData.append('birthday', values.birthday);
      formData.append('breed', values.breed);
      formData.append('sex', values.sex);
      formData.append('location', values.location);
      formData.append('comments', values.comments);
      if (values.category === 'sell') {
        formData.append('price', values.price);
      }
      const header = {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const { data } = await axios.post('/notices', formData, header, avatar);
      console.log('Image uploaded successfully!');
      return data;
    } catch (error) {
      console.error('Error uploading image:', error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getNoticesByQweryOwner = createAsyncThunk(
  'notices/getNoticesByQweryOwner',
  async ({ query, page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/owner?title=${query}&page=${page}&limit=${limit}`
      );
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNoticesByQweryFavorite = createAsyncThunk(
  'notices/getNoticesByQweryFavorite',
  async ({ query, page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `notices/favorite?title=${query}&page=${page}&limit=${limit}`
      );
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
