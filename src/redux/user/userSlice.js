import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {},
});

export const userReducer = userSlice.reducer;
