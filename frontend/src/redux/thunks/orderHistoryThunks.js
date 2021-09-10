import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderHistory = createAsyncThunk(
  "orderHistorySlice/getOrderHistory",
  async () => {
    const orderHistory = await fetch("/api/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const response = await orderHistory.json();
    return response;
  }
);
