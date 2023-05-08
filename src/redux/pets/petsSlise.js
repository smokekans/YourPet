import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './petsOperation';
const userInitialState = {
    user:{},
  pets: {},
};


function UserFulfilled(state, { payload }) {
    console.log(payload)
    state.user = payload.user
    state.error = null;
  }
const friendsSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
    .addCase(getFriends.fulfilled, UserFulfilled)
    .addCase(getFriends.rejected, (state, { payload }) => {
      
      state.error = payload;
    })},
  
});

export const friendsReducer = friendsSlice.reducer;
