export const getUser = state => state.user.user;
export const getNameUser = state => state.user.userName;
export const isLoading = state => state.user.isLoading;
export const getPets = state => state.user.pets;
export const isPets = state => state.user.user.pets;

export const getFavorites = state => state.user.favorite;
export const getFavorite = state => {
    console.log('Favorite state:', state.user.favorite);
    return state.user.favorite;
};
export const getUserId = state => state.user.user.id;


