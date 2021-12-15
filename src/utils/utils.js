import axios from "axios";

export const setAxiosHeaders = (params) => {
  const token = window.localStorage.getItem("accessToken");
  console.log("##################", token);

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
};

export const setSession = async (accessToken, refreshToken) => {
  console.log(accessToken);
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    return true;
  } else {
    console.log("FAIIIILED");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common.Authorization;
  }
};
