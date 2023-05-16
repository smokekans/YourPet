import { createAction, createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken, register } from './authOperations';

const authInitialState = {
  user: {},
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

function registerFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function loginFulfilled(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;

  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
}

function logOutFulfilled(state) {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.user = {};
  state.token = null;
}

export const addAccessToken = createAction('auth/token');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, registerFulfilled)
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, loginFulfilled)
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, logOutFulfilled)
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshToken, (state, { payload }) => {
        state.token = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
