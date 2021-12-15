import { createAsyncThunk } from "@reduxjs/toolkit";
import baseurl from "../../utils/baseurl";
import axios from "axios";

const getData = ({ type, vals }) => {
  let data;
  switch (type) {
    case "category":
      data = { title: vals };
      break;
    case "subcategory":
      data = {
        title: { uz: vals.uz, ru: vals.ru },
        cat_id: vals.cat_id,
      };
      break;
    default:
      data = {
        title: { uz: vals.uz, ru: vals.ru },
        sub_cat_id: vals.sub_cat_id,
        price: parseInt(vals.price),
        desc: {
          uz: vals.descUz,
          ru: vals.descRu,
        },
        img: vals.img,
      };
      break;
  }
  return data;
};

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
const getAsync = async (type, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${baseurl}/api/${type}/getAll`,
      method: "GET",
    });
    return { res, type };
  } catch (err) {
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const get = createAsyncThunk("category/get", getAsync);

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
