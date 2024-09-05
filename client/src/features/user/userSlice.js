import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// signup

export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectwithvalue) => {
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}signup`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    try {
      const result = response.json();
      return result;
    } catch (error) {
      return rejectwithvalue(error);
    }
  }
);

// login

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, rejectwithvalue) => {
    console.log(data, "inslice");
    let response = await fetch(
      `${import.meta.env.VITE_WEBSITE_BACKEND_URL}login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectwithvalue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (data, { rejectWithValue }) => {
    let token = localStorage.getItem("userToken");
    if (token) {
      localStorage.clear();
      return { status: "Logout successfully" };
    } else {
      return { status: "Login plz" };
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    // [logoutUser.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [logoutUser.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.user.push(action.payload);
    // },
    // [logoutUser.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    // },
  },
});

export default userDetails.extraReducers;
