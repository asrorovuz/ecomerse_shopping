import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../slice/index"

const store = configureStore({
  reducer: {
    product: productReducer
  },
})

export default store