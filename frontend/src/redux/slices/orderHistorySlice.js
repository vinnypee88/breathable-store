import { createSlice } from "@reduxjs/toolkit";

//thunk imports
import { getOrderHistory } from "../thunks/orderHistoryThunks";

//Order Slice stores orders into state only after a purchase has been made and only up until session close.

const orderHistorySlice = createSlice({
  name: "orderHistorySlice",
  initialState: {
    isLoading: false,
    hasError: false,
    previousOrders: [],
  },
  extraReducers: {
    [getOrderHistory.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getOrderHistory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.previousOrders = action.payload;
    },
    [getOrderHistory.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default orderHistorySlice.reducer;
export const selectOrderHistory = (state) => state.orderHistorySlice;
