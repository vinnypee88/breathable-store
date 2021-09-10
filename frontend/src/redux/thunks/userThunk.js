import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "userSlice/login",
  async (credentials) => {
    const loginAttempt = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    const response = await loginAttempt.json();
    return response;
  }
);

export const logout = createAsyncThunk("userSlice/logout", async () => {
  const logoutAttempt = await fetch("/logout", {
    method: "POST",
    credentials: "include",
  });
  const response = await logoutAttempt.json();
  return response;
});
