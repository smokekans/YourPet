import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useEffect } from 'react';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// export const getUser = createAsyncThunk(
//   'user/current',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/user/current', credentials);
    

//       console.log(data)
//       return data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const addToFavorites = createAsyncThunk(
  'user/addFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    };
  }
);

export const getFavorite = createAsyncThunk(
  'notices/getFavorite',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user/favorite' );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    };
  })

export const deleteFromFavorite = createAsyncThunk(
  'notices/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    };
  })

export const getUser = createAsyncThunk(
  'user/current',
 
  async () => {
    try {
      const { data } = await axios.get('/user/current');
    
      
      console.log(data)
      return data
    } catch (error) {
      return error.message;
    }
  }
);