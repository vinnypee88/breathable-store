import { configureStore } from "@reduxjs/toolkit";

//slice imports
import productSliceReducer from "./slices/productSlice";
import cartSliceReducer from "./slices/cartSlice";
import orderSliceReducer from "./slices/orderSlice";
import userSliceReducer from "./slices/userSlice";
import orderHistoryReducer from "./slices/orderHistorySlice";

export const store = configureStore({
  reducer: {
    productSlice: productSliceReducer,
    cartSlice: cartSliceReducer,
    orderSlice: orderSliceReducer,
    userSlice: userSliceReducer,
    orderHistorySlice: orderHistoryReducer,
  },
});
