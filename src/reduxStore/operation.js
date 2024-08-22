// https://66c721be732bf1b79fa57178.mockapi.io/todos

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://66c721be732bf1b79fa57178.mockapi.io",
});

export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/todos");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, thunkApi) => {
    try {
      const { data } = await instance.post("/todos", todo);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
