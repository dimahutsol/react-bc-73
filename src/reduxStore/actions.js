import { nanoid } from "nanoid";
import { ADD_TODO } from "./constants";

export const addTodo = (text) => {
  return { type: ADD_TODO, payload: { text, id: nanoid() } };
};
