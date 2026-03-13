import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../services/apiSlice.js";
import authReducer from "../features/auth/authSlice.js"
import cartReducer from "../features/cart/cartSlice.js"
import { productsReducer } from "../features/products/productsSlice.js";

export const store = configureStore({
    reducer:{
        products: productsReducer, 
        [apiSlice.reducerPath]  : apiSlice.reducer,
        auth: authReducer,
        cart: cartReducer,
    },
    middleware: (getDefault)=> getDefault().concat( apiSlice.middleware),
})