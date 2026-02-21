import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: JSON.stringify( localStorage.getItem("user", ) ) || null,
        token:localStorage.getItem("token") || null,
        loading: false,
        error:null,
    },
    reducers:{
        setCredentials: (state, action)=>{
              state.user = action.payload.user;
              state.token = action.payload.token;
              localStorage.setItem("token", action.payload.token);
              localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        logout:(state)=>{
            state.user = null;
            state.token = null,
            localStorage.removeItem("token");
            localStorage.removeItem("user");
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

export const { setCredentials ,logout } = authSlice.actions;
export default authSlice.reducer;