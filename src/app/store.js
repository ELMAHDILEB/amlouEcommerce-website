import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import { cartMiddleware } from "./middleware/cartMiddleware";
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefault)=> getDefault().concat(cartMiddleware),
})