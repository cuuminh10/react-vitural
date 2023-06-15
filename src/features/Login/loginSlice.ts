import { createSlice } from "@reduxjs/toolkit";
import { authLogout, loginLink } from "./auth-api";

export const loginSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: true,
        list: {
            isLoading: false,
            status: "",
            values: {}
        },
        save: {
            isSaving: false,
            isDeleting: false
        }
    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: {
        [loginLink.pending.type]: (state, action) => {
            state.list.status = "pending"
            state.list.isLoading = true
        },
        [loginLink.fulfilled.type]: (state, { payload }) => {
            state.list.status = "success"
            state.list.values = payload
            state.list.isLoading = false
            state.isLogin = true
        },
        [loginLink.rejected.type]: (state, action) => {
            state.list.status = "failed"
            state.list.isLoading = false
            
        },
    }
})

export default loginSlice.reducer
