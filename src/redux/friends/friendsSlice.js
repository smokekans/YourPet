import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './friendsOperations';

const friendsInitialState = {
  friends: [],
  isLoaded: false,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getFriends.pending, (state, action) => {
        state.isLoaded = false;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoaded = true;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.isLoaded = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
