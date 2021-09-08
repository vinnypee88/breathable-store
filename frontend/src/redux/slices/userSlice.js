import { createSlice } from "@reduxjs/toolkit";

//thunk imports
import { login, logout } from "../thunks/userThunk";

//User Slice will store the user details and carry out authentication so that users can view order history.

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoading: false,
    hasError: false,
    loggedIn: false,
    userDetails: {},
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.userDetails = action.payload;
      state.loggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [logout.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.userDetails = {};
      state.loggedIn = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default userSlice.reducer;
export const selectLoggedIn = (state) => state.userSlice.loggedIn;
export const selectUserDetails = (state) => state.userSlice.userDetails;
