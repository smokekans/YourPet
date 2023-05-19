import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken, register } from './authOperations';

const authInitialState = {
  user: {},
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  isNewUser: false,
};

function registerFulfilled(state, { payload }) {
  state.isNewUser = payload.user.isNewUser;
  state.isLoading = false;
  state.error = null;
}

function loginFulfilled(state, { payload }) {
  state.user = payload.user;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.error = null;
}

function logOutFulfilled(state) {
  state.isLoading = false;
  state.user = {};
  state.accessToken = null;
  state.refreshToken = null;
}

function refreshTokenFulfilled(state, { payload }) {
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
}

export const authSlice = createSlice({
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
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    setRefreshToken: (state, { payload }) => {
      state.refreshToken = payload;
    },
  },
});

export const { setAccessToken, setRefreshToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
