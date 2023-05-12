import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './petsOperation';
// import { addPetCard } from './petsOperation';

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

// const petInitialState = {
//   petForm: {
//     category: '',
//     title: '',
//     name: '',
//     birthday: '',
//     breed: '',
//     sex: '',
//     image: null,
//     location: '',
//     price: '',
//     comments: '',
//   },
//   status: 'idle',
//   error: null,
// };

// const petFormSlice = createSlice({
//   name: 'petForm',
//   petInitialState,
//   reducers: {
//     setPetForm: (state, action) => {
//       state.petForm = action.payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(addPetCard.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(addPetCard.fulfilled, state => {
//         state.status = 'succeeded';
//       })
//       .addCase(addPetCard.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export const petsFormReducer = petFormSlice.reducer;
export const friendsReducer = friendsSlice.reducer;
