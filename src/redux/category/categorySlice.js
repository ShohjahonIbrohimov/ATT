import { createSlice } from "@reduxjs/toolkit";
import { create, deleteCat, update, getGroup } from "./thunks";

// Define the initial state using that type
const initialState = {
  category: [],
  subcategory: [],
  product: [],
  group: null,
  currentGroup: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCurrentGroup: (state, action) => {
      state.currentGroup = action.payload;
    },
  },
  extraReducers: {
    [getGroup.fulfilled.toString()]: (state, action) => {
      console.log(action.payload);
      state.group = action.payload.res.data;
    },
    [deleteCat.fulfilled.toString()]: (state, action) => {},
    [update.fulfilled.toString()]: (state, action) => {},
  },
});

export const { setCurrentGroup } = categorySlice.actions;

export default categorySlice.reducer;
