import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetail = createAsyncThunk(
  "fetchUserDetail",
  async (data, { rejectWithValue }) => {
    let token = localStorage.getItem("userToken");
    if (token) {
      let response = await fetch("http://localhost:5000/details", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("userToken")),
        },
      });
      try {
        let result = await response.json();
        return result;
      } catch (error) {
        rejectWithValue(error);
      }
    } else {
      return "Login";
    }
  }
);

export const getUserDetail = createSlice({
  name: "getUserDetail",
  initialState: {
    userData: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(fetchUserDetail.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default getUserDetail.reducer;
