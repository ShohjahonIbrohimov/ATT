import { createSlice } from "@reduxjs/toolkit";
import { getTeacher, getTeachers, getTeacherStudents } from "./thunks";

// Define the initial state using that type
const initialState = {
  groups: [],
  teachers: [],
  students: [],
};

export const teacherSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    [getTeachers.fulfilled.toString()]: (state, action) => {
      state.teachers = action.payload.res.data;
    },
    [getTeacher.fulfilled.toString()]: (state, action) => {
      state.groups = action.payload.res.data.group;
    },
    [getTeacherStudents.fulfilled.toString()]: (state, action) => {
      state.students = action.payload.res.data.students;
    },
  },
});

export const { setSelected } = teacherSlice.actions;

export default teacherSlice.reducer;
