import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const getNoticeByCategory = createAsyncThunk(
  'notices/getNoticeByCategory',
  async ({ category, page = 1, limit = 0 }, { rejectWithValue }) => {
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
      console.log(data);
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
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addToFavorites = createAsyncThunk(
//   'user/addFavorite',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post(`/user/favorite/${id}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     };
//   }
// );

// export const getFavorite = createAsyncThunk(
//   'notices/getFavorite',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(" /user/favorite");
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     };
//   })

// export const deleteFromFavorite = createAsyncThunk(
//   'notices/deleteFavorite',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/user/favorite/${id}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     };
//   })

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
    try {
      await axios.delete(`notices/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
