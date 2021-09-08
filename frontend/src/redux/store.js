import { configureStore } from "@reduxjs/toolkit";

//slice imports
import productSliceReducer from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";
import orderSliceReducer from "./slices/orderSlice";
import userSliceREducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    productSlice: productSliceReducer,
    cartSlice: cartSliceReducer,
    orderSlice: orderSliceReducer,
    userSlice: userSliceREducer,
  },
});
