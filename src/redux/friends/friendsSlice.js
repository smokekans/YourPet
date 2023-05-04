import { createSlice } from '@reduxjs/toolkit';

const friendsInitialState = {
  nameCompany: {},
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: builder => {},
});

export const friendsReducer = friendsSlice.reducer;
