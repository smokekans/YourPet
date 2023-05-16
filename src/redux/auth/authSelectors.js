export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getName = state => state.auth.user.name;
export const getUser = state => state.auth.user;
