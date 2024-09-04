import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getprofiledetail = createAsyncThunk(
  "getprofiledetail",
  async (data, rejectwithvalue) => {
    let token = await localStorage.getItem("userToken");
    if (token) {
      let response = await fetch("http://localhost:5000/profile", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("userToken")),
        },
      });
      try {
        let result = await response.json();
        return result;
      } catch (error) {
        return rejectwithvalue(error);
      }
    } else {
      return "not found from profile";
    }
  }
);

export const profileSlice = createSlice({
  name: "userprofile",
  initialState: {
    userprofiledata: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getprofiledetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getprofiledetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userprofiledata = action.payload;
    });
    builder.addCase(getprofiledetail.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default profileSlice.reducer;
