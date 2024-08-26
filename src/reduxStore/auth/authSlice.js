import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operation";

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
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
