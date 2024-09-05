import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getProducts = createAsyncThunk(
//   "getProducts",
//   async (rejectwithvalue) => {
//     let response = await fetch("http://localhost:5000/products");
//     try {
//       let result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectwithvalue(error);
//     }
//   }
// );

// export const showProducts = createSlice({
//   name: "showProducts",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//   },

//   extraReducers: {
//     [getProducts.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getProducts.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     },
//     [getProducts.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

export const fetchProduct = createAsyncThunk("fetchProduct", async (value) => {
  const data = await fetch(
    `${import.meta.env.VITE_WEBSITE_BACKEND_URL}products`
  );
  return data.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    count: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;

// export default showProducts.extraReducers;
