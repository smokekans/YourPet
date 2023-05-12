import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpet-backend.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get('user/current');
      console.log(data);
      return data;
    } catch (e) {
      console.log(e.response.data);
      return rejectWithValue(e.message);

    }
  }
);

export const addToFavorites = createAsyncThunk(
  'user/addFavorite',
  async (id, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.post(`/user/favorite/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavorite = createAsyncThunk(
  'user/getFavorite',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get('/user/favorite');
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'user/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/user/favorite/${id}`);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateInfoUser = createAsyncThunk(
  'user/updateInfoUser',
  async (upDateUser, { rejectWithValue, getState }) => {
    
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to patch user');
      }
      token.set(value);
      
      const { data } = await axios.patch('/user/update', upDateUser);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const getUser = createAsyncThunk(
//   'user/current',

//   async () => {
//     try {
//       const { data } = await axios.get('/user/current');

//       console.log(data);
//       return data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

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
