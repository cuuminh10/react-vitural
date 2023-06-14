import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { IEmployee, ILink } from "../../models/employee";
import authHeader from "../../services/auth-header";

export const getEmployees = createAsyncThunk("link/getLinks", async ({} ,thunkAPI: any) => {
    try {
        const response = await API.get("/link/getLinks", { headers: authHeader() })
        return response.data
    } catch (error: any) {
        console.log(error)
    }
})

export const addEmployee = createAsyncThunk("link/add", async (link: ILink) => {
    try {
        const response = await API.post("/link/add", link, { headers: authHeader() })
        return response.data
    } catch (error: any) {
        console.log(error)
    }
})

export const updateEmployee = createAsyncThunk("link/updateById",
    async (employee: ILink) => {
        try {
            const response = await API.put(`/link/update/${employee.id}`, employee, { headers: authHeader() });
            return response.data
        } catch (error) {
            console.log(error)
        }
    }) 

export const deleteEmployee = createAsyncThunk("link/delete", async (employeeId: number) => {
    try {
        const response = await API.delete(`/link/delete/${employeeId}`, { headers: authHeader() })
        return response.data
    } catch (error) {
        console.log(error)
    }
})