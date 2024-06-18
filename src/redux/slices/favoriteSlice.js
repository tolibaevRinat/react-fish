import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const findItem = state.favorites.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        state.favorites = state.favorites.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.favorites.push({
          ...action.payload,
          isFavorite: true,
        });
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
