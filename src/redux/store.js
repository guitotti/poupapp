import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, storage } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
