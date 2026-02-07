import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import { cartMiddleware } from "./middleware/cartMiddleware";
import authReducer from "../features/auth/authSlice"
import productsReducer from "../features/products/productsSlice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        auth: authReducer,
        products: productsReducer
    },
    middleware: (getDefault)=> getDefault().concat(cartMiddleware),
})