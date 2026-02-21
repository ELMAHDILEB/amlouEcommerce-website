import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice.js"
import { cartMiddleware } from "./middleware/cartMiddleware";
import productsReducer from "../features/products/productsSlice.js"
import { authApi } from "../features/auth/authApi.js";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        [authApi.reducerPath]  : authApi.reducer,
        cart: cartReducer,
        products: productsReducer,
    },
    middleware: (getDefault)=> getDefault().concat(cartMiddleware, authApi.middleware),
})