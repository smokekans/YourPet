import { createSlice } from '@reduxjs/toolkit';
import { getNewNotice, getNoticeByCategory, getSingleNotice } from './noticesOperation';

const noticesInitialState = {
  notices: [],
  oneNotice: null,
  favorite: [],
  own: [],
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
}

const handleReject = (state, { payload }) => {
  state.notices = { data: {} }
  state.isLoading = false;
  state.error = payload
}

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNoticeByCategory.pending, state => {
        handlePending(state)
      })
      .addCase(getNoticeByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload.notices
        state.error = null;
      })
      .addCase(getNoticeByCategory.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(getSingleNotice.fulfilled, (state, { payload }) => {

        state.oneNotice = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSingleNotice.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(getNewNotice.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(getNewNotice.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
  },
  reducers: {
    clearNotices(state, { payload }) {
      state.notices = payload;
    }
  }

});


export const noticesReducer = noticesSlice.reducer;
export const { clearNotices } = noticesSlice.actions;
