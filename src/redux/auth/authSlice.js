import { createAction, createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken, register } from './authOperations';

const authInitialState = {
  user: {},
  accessToken: null,
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
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;

  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
}

function logOutFulfilled(state) {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.user = {};
  state.accessToken = null;
  state.refreshToken = null;
}

function refreshTokenFulfilled(state, { payload }) {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
}

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
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, refreshTokenFulfilled)
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
