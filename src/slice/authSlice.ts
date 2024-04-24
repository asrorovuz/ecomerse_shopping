import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    logged: false,
    loading: false,
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userStart: (state) => {
            state.loading = true
            state.error = ""
        },
        userSuccess: (state, actions) => {
            state.logged = true
            state.loading = false
            state.error = ""
            state.data = actions.payload
            localStorage.setItem("token", actions.payload.token)
        },
        userFailur: (state, actions) => {
            state.loading = false
            state.error = actions.payload.message
        }
    }
})

export const { userStart, userSuccess, userFailur } = authSlice.actions

export default authSlice.reducer