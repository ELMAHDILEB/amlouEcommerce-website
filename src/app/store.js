import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import { cartMiddleware } from "./middleware/cartMiddleware";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
    middleware: (getDefault)=> getDefault().concat(cartMiddleware),
})