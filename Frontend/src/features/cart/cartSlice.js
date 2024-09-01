import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductFromCart = createAsyncThunk(
  "fetchProductFromCart",
  async (data, { rejectWithValue }) => {
    let response = await fetch("http://localhost:5000/cart", {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("userToken")),
      },
    });
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCartProducts = createSlice({
  name: "getCartProducts",
  initialState: {
    cartProducts: null,
    isLoading: false,
    error: false,
    countOfProducts: null,
    totalAmount: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductFromCart.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartProducts = action.payload;
      state.countOfProducts = action.payload.length;
    });
    builder.addCase(fetchProductFromCart.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default getCartProducts.reducer;
