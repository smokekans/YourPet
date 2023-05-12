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

export const getPets = createAsyncThunk(
  'current/user',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.get('/user/current', credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);  





// export const addPetCard = createAsyncThunk(
//   'petForm/addPetCard',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/pets', formData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const createPetCard = formData => {
//   return async dispatch => {
//     try {
//       const result = await dispatch(addPetCard(formData));
//       // handle successful result here
//       console.log(result);
//     } catch (error) {
//       // handle error here
//       console.log(error);
//     }
//   };
// };

