import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoryReducer from "./category/categorySlice";
import studentReducer from "./students/studentSlice";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  studentReducer,
});

export default rootReducer;
