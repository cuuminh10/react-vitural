import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { IUser } from "../../models/employee";

export const loginLink = createAsyncThunk("auth/login", async (user: IUser) => {
    try {
        const response = await API.post("/auth/authenticate", user)

        if (response.data.access_token) {
            localStorage.setItem("accessToken", JSON.stringify(response.data.access_token));
        }

        return response.data
    } catch (error) {
        console.log(error)
    }
})