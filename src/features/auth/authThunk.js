import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";



export const registerUser  = createAsyncThunk("auth/register", async (data, thunkAPI)=>{
    try {
        const res = await api.post("auth/register", data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.res.data);
    }
});


export const loginUser = createAsyncThunk("auth/login", async (data, thunkAPI)=>{
    try {
        const res = await api.post('auth/login', data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.res.data);
    }
})