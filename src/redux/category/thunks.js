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
