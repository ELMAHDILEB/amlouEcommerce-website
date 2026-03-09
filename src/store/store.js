import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice.js";
import authReducer from "../features/auth/authSlice.js"
import cartReducer from "../features/cart/cartSlice.js"
// import { cartMiddleware } from "./middleware/cartMiddleware";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]  : apiSlice.reducer,
        auth: authReducer,
        cart: cartReducer,
    },
    middleware: (getDefault)=> getDefault().concat( apiSlice.middleware),
})