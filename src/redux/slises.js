import { createSlice } from "@reduxjs/toolkit";
import {
  signInOperation,
  logoutOperation,
  getStudentOperation,
} from "./operations";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    value: null,
    error: null,
    loading: false,
  },
  reducers: {
    forgetStudent: (state) => {
      state.value = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudentOperation.pending, (state) => {
      state.loading = true;
      state.value = null;
      state.error = null;
    });
    builder.addCase(getStudentOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      state.error = null;
    });
    builder.addCase(getStudentOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.value = null;
      state.error = payload;
    });
  },
});

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
    loading: false,
    error: null,
  },
  reducers: {
    clearToken: (state) => {
      state.value = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInOperation.pending, (state) => {
      state.loading = true;
      state.value = "";
      state.error = null;
    });
    builder.addCase(signInOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = payload;
      state.error = null;
    });
    builder.addCase(signInOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.value = "";
      state.error = payload;
    });
    builder.addCase(logoutOperation.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutOperation.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.value = "";
      state.error = null;
    });
    builder.addCase(logoutOperation.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export const { forgetStudent } = studentSlice.actions;
