import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (!findItem) {
        state.items.push({
          ...action.payload,
          isHave: true,
        });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { addItem, upWeight, downWeight, removeItem, clearItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
