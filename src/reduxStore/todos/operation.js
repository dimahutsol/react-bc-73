import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operation";

export const fetchTodos = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/tasks");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "tasks/addTodo",
  async (todo, thunkApi) => {
    try {
      const { data } = await instance.post("/tasks", todo);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "tasks/deleteTodo",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "tasks/updateTodo",
  async ({ text, id }, thunkApi) => {
    try {
      const { data } = await instance.patch(`/tasks/${id}`, { text });
      console.log(data);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
