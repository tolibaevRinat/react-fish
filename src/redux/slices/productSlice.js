import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (params) => {
  const { URL, currentPage, pageLimit } = params;
  const { data } = await axios.get(`${URL}?page=${currentPage}&limit=${pageLimit}`);
  return data;
});

const initialState = {
  fishes: {},
  status: 'loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFishes(state, action) {
      state.fishes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
        state.fishes = {};
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.fishes = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = 'error';
        state.fishes = {};
      });
  },
});

export const { setFishes } = productSlice.actions;

export default productSlice.reducer;
