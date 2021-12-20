import { createSlice } from "@reduxjs/toolkit";
import { create, deleteCat, update, getStudents } from "./thunks";

// Define the initial state using that type
const initialState = {
  category: [],
  all: [],
  selected: [],
};

export const studentSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    [getStudents.fulfilled.toString()]: (state, action) => {
      state.all = action.payload.res.data;
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

export const { setSelected } = studentSlice.actions;

export default studentSlice.reducer;
