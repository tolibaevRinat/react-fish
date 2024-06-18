import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import favorite from './slices/favoriteSlice';
import product from './slices/productSlice';

export const store = configureStore({
  reducer: { cart, favorite, product },
});
