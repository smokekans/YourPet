import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './newsOperations';

const newsInitialState = {
  news: [],
  status: true,
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
    });
    builder.addCase(getNews.rejected, (state, _) => {
      state.status = false;
      state.news = [];
    });
  },
});

export const newsReducer = newsSlice.reducer;
