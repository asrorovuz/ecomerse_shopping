import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slice/productSlice"
import authReducer from "../slice/authSlice"
 
const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer
  },
})

export default store