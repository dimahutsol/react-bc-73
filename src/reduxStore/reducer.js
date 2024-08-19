import { combineReducers } from "redux";
import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  SET_CURRENT_TODO,
  UPDATE_FILTER,
} from "./constants";

const initialState = {
  items: [],
  currentTodo: null,
};

const initialFilterState = {
  name: "",
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { name: action.payload };

    default:
      return state;
  }
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case SET_CURRENT_TODO:
      return {
        ...state,
        currentTodo: action.payload,
      };
    case CHANGE_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === state.currentTodo.id
            ? { ...item, text: action.payload }
            : item
        ),
        currentTodo: null,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
});
