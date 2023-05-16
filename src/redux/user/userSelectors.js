export const getUser = state => state.user.user;
export const getNameUser = state => state.user.userName;
export const isLoading = state => state.user.isLoading;

export const getPets = state => state.user.pets;
export const isPets = state => state.user.pets;

export const getAvatar = state => state.user.user.image;
export const getFavorites = state => state.user.favorite;
export const getFavorite = state => state.user.favorite;
export const getUserId = state => state.user.user.id;
