import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  addToFavorites,
  getFavorite,
  deleteFromFavorite,
} from '../../redux/user/userOperations';

const userInitialState = {
  user: {},
  userName: '',
  notices: [],
  favorite: [],
  token: null,
  error: null,
  isLoading: false,
};

function UserFulfilled(state, { payload }) {
  console.log(payload);
  state.user = payload;
  state.userName = payload.name;
  state.isLoading = false;
  state.error = null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, UserFulfilled)
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.favorite.push(payload);
        state.favorite = payload;
      })
      .addCase(addToFavorites.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload;
      })
      .addCase(getFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorite = payload;
      })
      .addCase(deleteFromFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
