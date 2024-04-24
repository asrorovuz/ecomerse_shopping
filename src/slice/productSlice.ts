import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../service/index";
import IProduct from "../types";

interface IInitialState {
    data: null | IProduct[],
    loading: boolean,
    error: null | string
}


export const fetchProductData = createAsyncThunk(
    "product/fetchProductData",
    async () => {
      const response = await axios.get("/products");

      return response.data;
    }
);

export const fetchCommentData = createAsyncThunk(
    "product/fetchCommentData",
    async () => {
      const response = await axios.get("/opinion");

      return response.data;
    }
);

const productSlice = createSlice({
    initialState: <IInitialState>{
        data: null,
        loading: true,
        error: null
    },
    name: "product",
    reducers: {

        setLoading: (state) => {
            state.loading = false
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchProductData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchProductData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch data";
        })
    }
})

export const {setLoading} = productSlice.actions
export default productSlice.reducer
