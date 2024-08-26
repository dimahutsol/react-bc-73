import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operation";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.isLogedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
