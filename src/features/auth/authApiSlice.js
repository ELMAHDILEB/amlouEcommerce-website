import { apiSlice } from "../../services/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>( {
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
        }),
        logoutUser:builder.mutation({
            query:()=>({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
        verifyEmail: builder.mutation({
            query:(data)=>({
                url:"/auth/verify",
                method:"POST",
                body: data,
            }),
        }),
      }),
});

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutMutation, useVerifyEmailMutation } = authApiSlice;