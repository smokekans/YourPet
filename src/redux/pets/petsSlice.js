import { createSlice } from '@reduxjs/toolkit';
import { createPet } from './petsOperations';

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
    clearPets(state) {
      state.pets = [];
    },
  },
});

export const petsReducer = petsSlice.reducer;
export const { clearPets } = petsSlice.actions;
