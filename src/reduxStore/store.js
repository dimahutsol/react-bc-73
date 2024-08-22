import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todosSlice";
import { filterReducer } from "./filterSlice";
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
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
