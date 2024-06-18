import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  weight: 0.5,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (!findItem) {
        state.items.push({
          ...action.payload,
          isHave: true,
          weight: 0.5,
        });
      }
    },
    upWeight(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.weight += 0.5;
      }
    },
    downWeight(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.weight -= 0.5;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { addItem, upWeight, downWeight, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
