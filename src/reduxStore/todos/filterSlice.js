import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
