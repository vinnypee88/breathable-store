import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "productSlice/getProducts",
  async () => {
    const storeProducts = await fetch("/api/products");
    const response = await storeProducts.json();
    return response;
  }
);
