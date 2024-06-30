import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "./slises";

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
  },
});
