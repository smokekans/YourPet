import { createSlice } from '@reduxjs/toolkit';

const newsInitialState = {
  news: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder => {},
});

export const newsReducer = newsSlice.reducer;
