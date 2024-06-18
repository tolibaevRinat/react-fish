import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import favorite from './slices/favoriteSlice';

export const store = configureStore({
  reducer: { cart, favorite },
});
