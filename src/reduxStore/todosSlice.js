import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "./operation";

const initialState = {
  items: [],
  currentTodo: null,
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addTodo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === state.currentTodo.id
            ? { ...action.payload }
            : item
        );
        state.currentTodo = null;
        state.isLoading = false;
      })
      .addCase(updateTodo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
  },
});

export const { setCurrentTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
