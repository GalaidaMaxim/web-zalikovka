import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice, studentSlice } from "./slises";

export const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    student: studentSlice.reducer,
  },
});
