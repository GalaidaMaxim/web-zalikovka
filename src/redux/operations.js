import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "../service/api";

export const signInOperation = createAsyncThunk(
  "student/signin",
  async (data, { rejectWithValue }) => {
    try {
      const result = await signIn(data);
      return result.token;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
