import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './operation';
import { handleFulFilled, handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  currentTodo: null,
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === state.currentTodo.id ? { ...action.payload } : item
        );
        state.currentTodo = null;
      })
      .addMatcher(({ type }) => type.endsWith('pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('fulfilled'), handleFulFilled);
  },
});

export const { setCurrentTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
