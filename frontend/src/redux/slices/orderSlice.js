import { createSlice } from "@reduxjs/toolkit";

//thunk imports
import { getOrderDetails } from "../thunks/orderThunks";

//Order Slice stores orders into state only after a purchase has been made and only up until session close.

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
