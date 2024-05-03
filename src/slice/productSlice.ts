import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../service/index";
import {IProduct} from "../types";

interface IInitialState {
    data: null | IProduct[],
    commentData: null | string[]
    loading: boolean,
    error: null | string
}

// cart page 
export const putProductData = createAsyncThunk(
    "product/putProductData",
    async (data: any) => {
      const response = await axios.post("/userProduct", data);

      if(response.status === 201){
        alert("success")
      }

      return response.data;
    }
);

export const deleteProductData = createAsyncThunk(
    "product/deleteProductData",
    async (id: number) => {
      const response = await axios.delete(`/userProduct/${id}`);

      if(response.status === 200){
        alert("success")
      }

      return response.data;
    }
);

//
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
        .addCase(fetchCommentData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCommentData.fulfilled, (state, action) => {
            state.loading = false;
            state.commentData = action.payload;
        })
        .addCase(fetchCommentData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch data";
        })
    }
})

export const {setLoading} = productSlice.actions
export default productSlice.reducer
