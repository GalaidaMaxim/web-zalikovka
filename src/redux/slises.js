import { createSlice } from "@reduxjs/toolkit";
import { signInOperation, logoutOperation } from "./operations";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearStudent: (state) => {
      state.value = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInOperation.pending, (state) => {
      state.loading = true;
      state.value = null;
      state.error = null;
    });
    builder.addCase(signInOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      state.error = null;
    });
    builder.addCase(signInOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = payload;
    });
    builder.addCase(logoutOperation.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = null;
    });
    builder.addCase(logoutOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setToken, clearStudent } = studentSlice.actions;
