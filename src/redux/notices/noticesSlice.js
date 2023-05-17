import { createSlice } from '@reduxjs/toolkit';
import {
  addNotices,
  deleteNotice,
  getNewNotice,
  getNoticeByCategory,
  getNoticesByQwery,
  getSingleNotice,
  createNotice,
  getUserNotices,
  getNoticesByQweryOwner,
  getNoticesByQweryFavorite,
} from './noticesOperation';
import { getFavorite } from 'redux/user/userOperations';

const noticesInitialState = {
  notices: [],
  user: {},
  pets: [],
  oneNotice: null,
  favorite: [],
  own: [],
  ownTotal: 0,
  error: null,
  isLoading: false,
  total: 0,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, action) => {
  state.notices = [];
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticeByCategory.pending, state => {
        handlePending(state);
      })
      .addCase(getNoticeByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload;
        state.error = null;
      })
      .addCase(getNoticeByCategory.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getSingleNotice.fulfilled, (state, { payload }) => {
        state.oneNotice = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSingleNotice.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getNewNotice.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(getNewNotice.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(addNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.notices = state.notices.filter(({ _id }) => _id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        handleReject(state, action);
      })
      // додає оголошення
      .addCase(createNotice.pending, state => {
        handlePending(state);
      })
      .addCase(createNotice.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createNotice.rejected, (state, { payload }) => {
        handleReject(state, payload);
      })
      .addCase(getUserNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.own = payload.notices;
      })
      .addCase(getUserNotices.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getNoticesByQwery.pending, state => {
        handlePending(state);
      })
      .addCase(getNoticesByQwery.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload;
        state.error = null;
      })
      .addCase(getNoticesByQwery.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getNoticesByQweryOwner.pending, state => {
        handlePending(state);
      })
      .addCase(getNoticesByQweryOwner.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload;
        state.error = null;
      })
      .addCase(getNoticesByQweryOwner.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getNoticesByQweryFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(getNoticesByQweryFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload.notices;
        state.error = null;
      })
      .addCase(getNoticesByQweryFavorite.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notices = payload;
        state.error = null;
      });
  },
  reducers: {
    clearNotices(state, { payload }) {
      state.notices = payload;
    },

    changeFavoritesNotices(state, { payload }) {
      state.notices = state.notices.filter(notice => notice._id !== payload);
    },

  },
});

export const noticesReducer = noticesSlice.reducer;
export const { clearNotices, changeFavoritesNotices } = noticesSlice.actions;
