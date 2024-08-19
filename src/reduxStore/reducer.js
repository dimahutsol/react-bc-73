import { ADD_TODO } from "./constants";

const initialState = {
  items: [],
};

export const todosReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      console.log(action.type);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
