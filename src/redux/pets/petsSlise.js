import { createSlice } from '@reduxjs/toolkit';
import { getFriends,deletePets } from './petsOperation';
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
    })
    .addCase(deletePets.pending, state => {
      state.isLoading = true;
    })
    .addCase(deletePets.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.image = payload;
      state.error = null;
      
    })
    .addCase(deletePets.rejected, (state, {payload} ) => {
     
      state.isLoading = false;
      state.error = payload;
    })
  
  
  },
  
});

export const friendsReducer = friendsSlice.reducer;
