import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderDetails = createAsyncThunk(
  "orderSlice/getOrderDetails",
  async () => {
    const sessionId = window.location.search;
    const orderDetails = await fetch(
      `/create-checkout-session/success${sessionId}`
    );
    const response = await orderDetails.json();
    return response;
  }
);
