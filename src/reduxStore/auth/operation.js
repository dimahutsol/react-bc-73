import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// email:"nnnnlloopo@ukr.net"

// password:"LKJJHHNNMM;iiii"

const instance = axios.create({
  baseURL: "https://task-manager-api.goit.global/",
});

export const register = createAsyncThunk(
  "auth/fetchRegister",
  async (user, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", user);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
