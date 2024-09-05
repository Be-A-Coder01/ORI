import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fashions = createAsyncThunk(
  "fashions",
  async (data, { rejectWithValue }) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}fashions`
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const bags = createAsyncThunk("bags", async (data, rejectWithValue) => {
  let response = await fetch(`${import.meta.env.VITE_WEBSITE_BACKEND_URL}bags`);
  try {
    let result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const shoes = createAsyncThunk(
  "shoes",
  async (data, rejectWithValue) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}shoes`
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const electronicdevices = createAsyncThunk(
  "electronicdevices",
  async (data, rejectWithValue) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}electronicdevices`
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const coesmetics = createAsyncThunk(
  "coesmetics",
  async (data, rejectWithValue) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}coesmetics`
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const likedProducts = createAsyncThunk(
  "likedProducts",
  async (data, rejectWithValue) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}likedProducts`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: JSON.parse(localStorage.getItem("userToken")),
        },
      }
    );
    try {
      let result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categoryProducts: null,
    isLoading: false,
    error: false,
    count: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fashions.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fashions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(fashions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(bags.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(bags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(bags.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(shoes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(shoes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(shoes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(electronicdevices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(electronicdevices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(electronicdevices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(coesmetics.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(coesmetics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(coesmetics.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(likedProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(likedProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoryProducts = action.payload;
      state.count = action.payload.length;
    });
    builder.addCase(likedProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
