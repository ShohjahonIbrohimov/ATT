import { createSlice } from "@reduxjs/toolkit";
import {
  getGroups,
  deleteCat,
  update,
  getGroup,
  getAttendanceList,
} from "./thunks";

// Define the initial state using that type
const initialState = {
  category: [],
  subcategory: [],
  groups: [],
  group: null,
  currentGroup: null,
  att_list: [],
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
    [getGroups.fulfilled.toString()]: (state, action) => {
      state.groups = action.payload.res.data;
    },
    [deleteCat.fulfilled.toString()]: (state, action) => {},
    [update.fulfilled.toString()]: (state, action) => {},
    [getAttendanceList.fulfilled.toString()]: (state, action) => {
      state.att_list = action.payload.res.data;
    },
  },
});

export const { setCurrentGroup } = categorySlice.actions;

export default categorySlice.reducer;
