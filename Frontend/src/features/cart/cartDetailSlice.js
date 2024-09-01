import { createSlice } from "@reduxjs/toolkit";

export const getCartDetail = createSlice({
  name: "getCartDetail",
  initialState: {
    cartPriceData: 0,
  },
  reducers: {
    postTotal: (state, action) => {
      state.cartPriceData = action.payload;
    },
    increaseTotal: (state, action) => {
      state.cartPriceData += action.payload;
      console.log(state.cartPriceData, "increase");
    },
    decreaseTotal: (state, action) => {
      state.cartPriceData -= action.payload;
      console.log(state.cartPriceData, "decrease");
    },
  },
});

export const { postTotal, increaseTotal, decreaseTotal } =
  getCartDetail.actions;
export default getCartDetail.reducer;
