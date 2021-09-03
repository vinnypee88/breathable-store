import { createSlice } from "@reduxjs/toolkit";

//thunk imports
import { getProducts } from "../thunks/productThunks";

//Product Slice will add product objects to the store so that product components can be rendered.

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    isLoading: false,
    hasError: false,
    products: [],
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default productSlice.reducer;
export const selectProducts = (state) => state.productSlice;
