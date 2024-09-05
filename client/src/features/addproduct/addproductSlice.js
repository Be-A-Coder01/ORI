import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchaddproduct = createAsyncThunk(
  "fetchaddproduct",
  async (data, rejectWithValue) => {
    let token = await localStorage.getItem("userToken");
    if (token) {
      let response = await fetch(
        `${import.meta.env.VITE_WEBSITE_BACKEND_URL}addproduct`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );

      const result = await response.json();
      return result;
    } else {
      return { status: "login plz" };
    }
  }
);

export const addproductsDetails = createSlice({
  name: "addproductsDetails",
  initialState: {
    addedproductdata: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchaddproduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchaddproduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addedproductdata = action.payload;
    });
    builder.addCase(fetchaddproduct.rejected, (state, action) => {
      state.isLoading = false;
      state.addedproductdata = action.error;
    });
  },
});

export default addproductsDetails.reducer;
