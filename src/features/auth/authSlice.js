import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        token:null,
        loading: false,
        error:null,
    },
    reducers:{
        logout:(state)=>{
            state.user = null;
            state.token = null,
            localStorage.removeItem("token")
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload.error;
        })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;