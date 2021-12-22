import { createAsyncThunk } from "@reduxjs/toolkit";
import baseurl from "../../utils/baseurl";
import axios from "axios";

// GET
const getAsync = async (setloading, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/getUserByRole/`,
      method: "POST",
      data: {
        role_user: 2,
      },
    });
    setloading(false);
    return { res };
  } catch (err) {
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getTeachers = createAsyncThunk("category/get-teachers", getAsync);

// GET
const getTeacherStudentsAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/teacher_group/${data.id}`,
      method: "GET",
    });
    data.setLoading(false);
    return { res };
  } catch (err) {
    data.setLoading(false);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getTeacherStudents = createAsyncThunk(
  "category/get-teacher-students",
  getTeacherStudentsAsync
);

// GET
const getTeacherAsync = async (setloading, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/teacher/`,
      method: "GET",
    });
    setloading(false);
    return { res };
  } catch (err) {
    setloading(false);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getTeacher = createAsyncThunk(
  "category/get-teacher",
  getTeacherAsync
);

// GET
const takeAttendanceAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/checkAttendance/`,
      method: "POST",
      data: data.data,
    });
    data.onSuccess();
    return { res };
  } catch (err) {
    data.onError();
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const takeAttendence = createAsyncThunk(
  "category/take-attendance",
  takeAttendanceAsync
);
