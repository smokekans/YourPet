import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './friendsOperations';

const friendsInitialState = {
  friends: [],
  isLoading: false,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getFriends.pending, state => {
        state.isLoading = false;
      })
      .addCase(getFriends.fulfilled, (state, { payload }) => {
        state.friends = payload;
        state.isLoading = true;
      })
      .addCase(getFriends.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
