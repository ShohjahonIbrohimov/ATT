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
const loginAsync = async (data) => {
  try {
    const res = await axios({
      url: `${base_url}/api/token/`,
      method: "POST",
      data,
    });
    setSession(res.data.access, res.data.refresh);
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const login = createAsyncThunk("auth/login", loginAsync);

// REFRESH
const refreshAsync = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      url: `${base_url}/api/token/refresh/`,
      method: "POST",
      data: {
        refresh: data.refreshToken,
      },
    });
    await setSession(res.data.access, null);
    data.setloading(false);
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const refresh = createAsyncThunk("auth/refresh", refreshAsync);
