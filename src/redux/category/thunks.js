import { createAsyncThunk } from "@reduxjs/toolkit";
import baseurl from "../../utils/baseurl";
import axios from "axios";

// CREATE
const createAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/group/`,
      method: "POST",
      data: data.data,
    });
    data.getOrders();
    return { res };
  } catch (err) {
    data.onError(err.response.data.name[0]);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const create = createAsyncThunk("category/create", createAsync);

// ADD STUDENT TO GROUP
const addStudentAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/addUserFromGroup/`,
      method: "POST",
      data: data.data,
    });
    data.setLoading(false);
    return { res };
  } catch (err) {
    data.setLoading(false);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const addStudent = createAsyncThunk(
  "category/add-student",
  addStudentAsync
);

// DELETE STUDENT FROM GROUP
const deleteStudentAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/deleteUserFromGroup/`,
      method: "POST",
      data: data.data,
    });
    data.onSuccess();
    return { res };
  } catch (err) {
    data.onSuccess();
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const deleteStudent = createAsyncThunk(
  "category/delete-student",
  deleteStudentAsync
);

// GET
const getGroupAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/group/${data.id}/`,
      method: "GET",
    });
    data.onSuccess();
    return { res };
  } catch (err) {
    data.onSuccess();
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getGroup = createAsyncThunk("category/get-group", getGroupAsync);

// GET
const getGroupsAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/group/`,
      method: "GET",
    });
    data.onSuccess();
    return { res };
  } catch (err) {
    data.onSuccess();
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getGroups = createAsyncThunk(
  "category/get-groups",
  getGroupsAsync
);

// DELETE
const deleteAsync = async (data, { rejectWithValue }) => {
  console.log("aaaa", data);
  try {
    const res = await axios({
      url: `${baseurl}/control_system/group/${data.data.id}/`,
      method: "DELETE",
    });
    data.getOrders();
    return res;
  } catch (err) {
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const deleteCat = createAsyncThunk("category/delete", deleteAsync);

// UPDATE
const updateAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/group/${data.data.id}/`,
      method: "PUT",
      data: data.data,
    });
    data.getOrders();
    return { res };
  } catch (err) {
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const update = createAsyncThunk("category/update", updateAsync);

// ADD TEACHER TO GROUP
const addTeacherAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/addUserFromGroup/`,
      method: "POST",
      data: data.data,
    });
    data.setLoading(false);
    return { res };
  } catch (err) {
    data.setLoading(false);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const addTeacher = createAsyncThunk(
  "category/add-teacher",
  addTeacherAsync
);

const getAttListAsync = async (setLoading, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/attendance/getAll/`,
      method: "GET",
    });
    setLoading(false);
    return { res };
  } catch (err) {
    setLoading(false);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getAttendanceList = createAsyncThunk(
  "category/get-att-list",
  getAttListAsync
);
