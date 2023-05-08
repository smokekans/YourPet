import { createSlice } from '@reduxjs/toolkit';
import {getUser} from '../../redux/user/userOperations'
const userInitialState = {
  user: {},
  
  error: null
};
function UserFulfilled(state, { payload }) {
  console.log(payload)
  state.user = payload;
  state.error = null;
}
const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
  .addCase(getUser.fulfilled, UserFulfilled)
  .addCase(getUser.rejected, (state, { payload }) => {
    
    state.error = payload;
  })},
});

export const userReducer = userSlice.reducer;
