import { createSlice } from '@reduxjs/toolkit';
import { getNoticeByCategory } from './noticesOperation';

const noticesInitialState = {
  pets: null,
  notices: { result: [] },
  favorite: [],
  own: [],
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
}

const handleReject = (state, action) => {
  state.notices = { result: [] }
  state.isLoading = false;
  state.error = action.payload
}

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNoticeByCategory.pending, state => {
        handlePending(state)
      })
      .addCase(getNoticeByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload
        state.error = null;
      })
      .addCase(getNoticeByCategory.rejected, (state, action) => {
        handleReject(state, action)
      })
  }

});

export const noticesReducer = noticesSlice.reducer;
