import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  currentTodo: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
    changeTodo(state, action) {
      state.items = state.items.map((item) =>
        item.id === state.currentTodo.id
          ? { ...item, text: action.payload }
          : item
      );
      state.currentTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, setCurrentTodo, changeTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
