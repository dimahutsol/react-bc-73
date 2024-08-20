import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todosSlice";
import { filterReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});
