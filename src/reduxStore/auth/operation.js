import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// email:"nnnnlloopo@ukr.net"

// password:"LKJJHHNNMM;iiii"

export const instance = axios.create({
  baseURL: "https://task-manager-api.goit.global/",
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  "auth/fetchRegister",
  async (user, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/fetchLogin",
  async (user, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/fetchLogout",
  async (_, thunkApi) => {
    try {
      await instance.post("users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();
    if (!auth.token) return thunkApi.rejectWithValue("Unable to retrieve user");
    try {
      setAuthHeader(auth.token);
      const { data } = await instance.get("users/me");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
