import { createSlice } from '@reduxjs/toolkit';

const noticesInitialState = {
  pets: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder => {},
});

export const noticesReducer = noticesSlice.reducer;
