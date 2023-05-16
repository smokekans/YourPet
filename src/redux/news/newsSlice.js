import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './newsOperations';

const newsInitialState = {
  news: [],
  status: true,
  total: 0,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder => {
    builder.addCase(getNews.pending, (state, _) => {
      state.status = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload.news;
      state.status = false;
      state.total = action.payload.total;
    });
    builder.addCase(getNews.rejected, (state, _) => {
      state.status = false;
      state.news = [];
    });
  },
});

export const newsReducer = newsSlice.reducer;
