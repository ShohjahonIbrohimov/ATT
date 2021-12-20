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

// GET
const getAsync = async (setloading, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/control_system/getUserByRole/`,
      method: "POST",
      data: {
        role_user: 1,
      },
    });
    setloading(false);
    return { res };
  } catch (err) {
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const getStudents = createAsyncThunk("category/get-students", getAsync);

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
