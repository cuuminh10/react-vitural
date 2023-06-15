import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import API from "../../api";
import { IEmployee, ILink } from "../../models/employee";
import authHeader from "../../services/auth-header";

export const getEmployees = createAsyncThunk("link/getLinks", async () => {
    try {
        const response = await API.get("/link/getLinks", { headers: authHeader() })
        return response.data
    } catch (error: any) {
        console.log(error)

        if (error.response.status == 403) {
            window.location.href = `${window.location.origin}/login`;
        }
    }
})

export const addEmployee = createAsyncThunk("link/add", async (link: ILink) => {
    try {
        const response = await API.post("/link/add", link, { headers: authHeader() })
        return response.data
    } catch (error: any) {
        console.log(error)

        if (error.response.status == 403) {
            window.location.href = `${window.location.origin}/login`;
        }
    }
})

export const updateEmployee = createAsyncThunk("link/updateById",
    async (employee: ILink) => {
        try {
            const response = await API.put(`/link/update/${employee.id}`, employee, { headers: authHeader() });
            return response.data
        } catch (error: any) {
            console.log(error)

            if (error.response.status == 403) {
                window.location.href = `${window.location.origin}/login`;
            }
        }
    }) 

export const deleteEmployee = createAsyncThunk("link/delete", async (employeeId: number) => {
    try {
        const response = await API.delete(`/link/delete/${employeeId}`, { headers: authHeader() })
        return response.data
    } catch (error :any) {
        console.log(error)

        if (error.response.status == 403) {
            window.location.href = `${window.location.origin}/login`;
        }
    }
})

export const findLink = createAsyncThunk("link/findLink", async (path: string) => {
    try {
        const response = await API.delete(`/link/findLink?path=${path}`, { headers: authHeader() })
        return response.data
    } catch (error :any) {
        console.log(error)

        if (error.response.status == 403) {
            window.location.href = `${window.location.origin}/login`;
        }
    }
})