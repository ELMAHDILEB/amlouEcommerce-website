import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:5000/api",
        // baseUrl: import.meta.env.VITE_API_URL,
        baseUrl: "https://backend-amlou-production.up.railway.app/api",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const token = getState.auth?.token;
            if (token) headers.set("authorization", `Bearer ${token}`)
            return headers;
        },
    }),
    tagTypes: ["User", "Product", "Cart"],
    endpoints: () => ({}),
    
})
