import { createSlice } from "@reduxjs/toolkit";
import { get, create, deleteCat, update } from "./thunks";

// Define the initial state using that type
const initialState = {
  category: [],
  subcategory: [],
  product: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [get.fulfilled.toString()]: (state, action) => {
      state[action.payload.type] = action.payload.res.data.data;
    },
    [create.fulfilled.toString()]: (state, action) => {
      // state[action.payload.type] = [
      //   ...state[action.payload.type],
      //   action.payload.res.data.data,
      // ];
    },
    [deleteCat.fulfilled.toString()]: (state, action) => {},
    [update.fulfilled.toString()]: (state, action) => {},
  },
});

export default categorySlice.reducer;
