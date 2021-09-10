import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderHistory = createAsyncThunk(
  "orderHistorySlice/getOrderHistory",
  async () => {
    const orderHistory = await fetch("http://localhost:5000/api/order", {
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
