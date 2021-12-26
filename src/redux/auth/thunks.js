import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base_url from "../../utils/baseurl";
import { setSession } from "../../utils/utils";
// qazwsxedc1234

// SIGN UP
const signupAsync = async (data) => {
  try {
    const res = await axios({
      url: `${base_url}/api/token/`,
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const signup = createAsyncThunk("auth/signup", signupAsync);

// LOGIN
const loginAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: `${base_url}/api/token/`,
      method: "POST",
      data: data.data,
    });
    setSession(res.data.access, res.data.refresh);
    data.onSuccess();
    return res;
  } catch (err) {
    data.onError(err?.response?.data?.detail ?? "ERROR");
    return rejectWithValue([], err);
  }
};

export const login = createAsyncThunk("auth/login", loginAsync);

// REFRESH
const refreshAsync = async (data) => {
  try {
    const res = await axios({
      url: `${base_url}/api/token/refresh/`,
      method: "POST",
      data: {
        refresh: data.refreshToken,
      },
    });
    await setSession(res.data.access, null);
    data.onSuccess();
    return res;
  } catch (err) {
    data.onError();
    // Handle Error Here
    console.error(err);
  }
};

export const refresh = createAsyncThunk("auth/refresh", refreshAsync);

// REFRESH
const getStatusAsync = async (data) => {
  try {
    const res = await axios({
      url: `${base_url}/control_system/getUserStatus/`,
      method: "GET",
    });
    // data.onSuccess();
    return res;
  } catch (err) {
    data.onError();
    // Handle Error Here
    console.error(err);
  }
};

export const getStatus = createAsyncThunk("auth/get-status", getStatusAsync);
