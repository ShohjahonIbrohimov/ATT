import { combineReducers } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import categoryReducer from "./category/categorySlice"


const rootReducer = combineReducers({authReducer, categoryReducer})

export default rootReducer