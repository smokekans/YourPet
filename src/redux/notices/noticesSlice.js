import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorites,
  deleteFromFavorite,
  getFavorite,
  getNewNotice,
  getNoticeByCategory,
  getSingleNotice,
} from './noticesOperation';

const noticesInitialState = {
  notices: [
    {
      _id: '637216768f895fcabfd83e60',
      title: 'Cute Puppy',
      name: 'Buddy',
      birthday: '02.10.2020',
      breed: 'Golden Retriever',
      location: 'Los Angeles',
      sex: 'male',
      category: 'sell',
      price: '1500$',
      email: 'user2@net.com',
      phone: '+380661234567',
      comments: 'He is very playful and loves children!',
      image: 'https://source.unsplash.com/random?animals&cat&dog',
    },
    {
      _id: '637216768f895fcabfd83e61',
      title: 'Adorable kitten',
      name: 'Snowball',
      birthday: '15.05.2021',
      breed: 'Siamese',
      location: 'London',
      sex: 'female',
      category: 'sell',
      price: '800$',
      email: 'user3@net.com',
      phone: '+380661234567',
      comments: 'She is litter box trained and loves to cuddle!',
      image: 'https://source.unsplash.com/random?animals&cat&dog',
    },
  ],
  oneNotice: null,
  favorite: [],
  own: [],
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.notices = { data: [] };
  state.isLoading = false;
  state.error = payload;
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
      .addCase(getNoticeByCategory.rejected, (state, { payload }) => {
        handleReject(state, payload);
      })
      .addCase(getSingleNotice.fulfilled, (state, { payload }) => {
        state.oneNotice = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSingleNotice.rejected, (state, { payload }) => {
        handleReject(state, payload);
      })
      .addCase(getNewNotice.fulfilled, (state, { payload }) => {
        state.notices.push(payload);
        state.isLoading = false;
      })
      .addCase(getNewNotice.rejected, (state, { payload }) => {
        handleReject(state, payload);
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(getFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favorite = action.payload;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        handleReject(state, action);
      })
      .addCase(deleteFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteFromFavorite.rejected, (state, action) => {
        handleReject(state, action);
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
