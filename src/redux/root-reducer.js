import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import categoryReducer from "./category/categorySlice";
import studentReducer from "./students/studentSlice";
import teacherReducer from "./teachers/teacherSlice";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  studentReducer,
  teacherReducer,
});

export default rootReducer;
