import { createSlice } from '@reduxjs/toolkit';
import { addNotices, addToFavorites, deleteFromFavorite, deleteNotice, getFavorite, getNewNotice, getNoticeByCategory, getSingleNotice } from './noticesOperation';

const noticesInitialState = {
  notices: [],
  user: {
    favorite: [],
  },
  pets: [],
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
  state.notices = { data: [] }
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
        state.notices = payload
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
      .addCase(addToFavorites.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.favorite.push(payload);
        state.favorite = payload;

      })
      .addCase(addToFavorites.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(getFavorite.pending, state => {
        handlePending(state)
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = payload;
      })
      .addCase(getFavorite.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(deleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favorite = payload;
      })
      .addCase(deleteFromFavorite.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(addNotices.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(addNotices.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.notices = state.notices.filter(({ _id }) => _id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteNotice.rejected, (state, { payload }) => {
        handleReject(state, payload)
      })
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
