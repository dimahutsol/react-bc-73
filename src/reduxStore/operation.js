// https://66c721be732bf1b79fa57178.mockapi.io/todos

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://66c721be732bf1b79fa57178.mockapi.io",
});

export const fetchTodos = createAsyncThunk("todos/fetchAll", async () => {
  const { data } = await instance.get("/todos");
  console.log(data);

  return data;
});
