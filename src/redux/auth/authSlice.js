import { createSlice } from "@reduxjs/toolkit";
import { signup, login, refresh, getStatus } from "./thunks";

// Define the initial state using that type
const initialState = {
  user: null,
  token: null,
  authenticated: false,
  refreshed: false,
  status: null,
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
      state.refreshed = false;
      state.status = null;
    },
  },
  extraReducers: {
    [signup.fulfilled.toString()]: (state, action) => {
      state.token = action.payload.data.token;
    },
    [login.fulfilled.toString()]: (state, action) => {
      const data = action.payload.data;
      state.authenticated = true;
      state.user = data.user;
      state.token = data.token;
    },
    [getStatus.fulfilled.toString()]: (state, action) => {
      state.status = action.payload.data.role;
      state.username = action.payload.data.username;
    },
    [refresh.fulfilled.toString()]: (state, action) => {
      state.refreshed = true;
    },
    [refresh.rejected.toString()]: (state, action) => {
      state.refreshed = false;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
