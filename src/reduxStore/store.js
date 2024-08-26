import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todos/todosSlice";
import { filterReducer } from "./todos/filterSlice";
import { authReducer } from "./auth/authSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "todos",
//   version: 1,
//   storage,
//   // blacklist: ["currentTodo"],
//   whitelist: ["items"],
// };

// const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
