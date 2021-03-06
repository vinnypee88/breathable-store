import { createSlice } from "@reduxjs/toolkit";

//thunk imports

//Cart Slice will manage the cart and update to local storage and/or database

//setting cart to that of localStorage IF its there ELSE empty []
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isLoading: false,
    hasError: false,
    cart: cartFromLocalStorage,
  },
  reducers: {
    addToCartRedux: (state, action) => {
      const index = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index !== -1) {
        const newQty = state.cart[index].qty + action.payload.qty;
        if (newQty <= action.payload.stock_count) {
          state.cart[index].qty += action.payload.qty;
        }

        //item is already in cart
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      //can potentially update users cart on DB if there is one by calling another function from here
    },
    updateCartQtyRedux: (state, action) => {
      const index = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cart[index].qty = action.payload.qty;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCartRedux: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCartRedux: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export default cartSlice.reducer;
export const selectCart = (state) => state.cartSlice.cart;
export const {
  addToCartRedux,
  updateCartQtyRedux,
  removeFromCartRedux,
  emptyCartRedux,
} = cartSlice.actions;
