import { createSlice } from "@reduxjs/toolkit";

//thunk imports
import { getOrderDetails } from "../thunks/orderThunks";

//Product Slice will add product objects to the store so that product components can be rendered.

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    isLoading: false,
    hasError: false,
    orderDetails: [],
  },
  extraReducers: {
    [getOrderDetails.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getOrderDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.orderDetails = action.payload;
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default orderSlice.reducer;
export const selectOrder = (state) => state.orderSlice;
