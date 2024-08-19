import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todosReducer } from "./reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(todosReducer, enhancer);
