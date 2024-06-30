import { createSlice } from "@reduxjs/toolkit";
import { signInOperation } from "./operations";

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
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

//  [signInOperation.pending]: (state) => {
//       state.loading = true;
//       state.value = "";
//       state.error = null;
//     },
//     [signInOperation.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.value = payload;
//       state.error = null;
//     },
//     [signInOperation.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.value = "";
//       state.error = payload;
//     },
