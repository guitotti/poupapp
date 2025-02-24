import { configureStore } from "@reduxjs/toolkit";
import usuarioSlice from "./";

const store = configureStore({
  reducer: {
    usuario: usuarioSlice,
  },
});

export default store;
