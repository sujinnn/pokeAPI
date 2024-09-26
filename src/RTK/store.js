import { configureStore } from "@reduxjs/toolkit";
import { pokemontSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemontSlice.reducer,
  },
});
