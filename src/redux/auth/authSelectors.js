export const getAccessToken = state => state.auth.accessToken;
export const getRefreshToken = state => state.auth.refreshToken;

export const getName = state => state.auth.user.name;
export const getUser = state => state.auth.user;

export const getIsNewUser = state => state.auth.isNewUser;
