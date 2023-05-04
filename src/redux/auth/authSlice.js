import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  token: null,
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {},
});

export const authReducer = authSlice.reducer;
