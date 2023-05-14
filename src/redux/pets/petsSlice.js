import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './petsOperation';
import { createPet} from './petsOperation';

const userInitialState = {
  user: {},
  pets: {},
};

function UserFulfilled(state, { payload }) {
  console.log(payload);
  state.user = payload.user;
  state.error = null;
}
const friendsSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(getFriends.fulfilled, UserFulfilled)
      .addCase(getFriends.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

const petsInitialState = {
  pets: [],
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.pets = [];
  state.isLoading = false;
  state.error = payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,
  extraReducers: builder => {
    builder
      .addCase(createPet.pending, state => {
        handlePending(state);
      })
      .addCase(createPet.fulfilled, (state, { payload }) => {
        state.pets.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createPet.rejected, (state, { payload }) => {
        handleReject(state, payload);
      });
  },
  reducers: {
    clearPets(state, { payload }) {
      state.pets = [];
    },
  },
});

export const petsReducer = petsSlice.reducer;
export const { clearPets } = petsSlice.actions;
export const friendsReducer = friendsSlice.reducer;
