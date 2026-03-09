import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../services/apiSlice";

const savedItem = localStorage.getItem("cart");
const initialState = {
    items: savedItem ? JSON.parse(savedItem) : [],
    totalPrice: 0,
    totalItems: 0
}

const calculateTotals = (state) => {
    state.totalItems = state.items.reduce((total, item) => total + Number(item.quantity), 0);
    state.totalPrice = state.items.reduce((total, item) => total + (Number(item.price) * Number(item.quantity)), 0);
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(i => i._id === action.payload._id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity || 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1
                })
            }
            calculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter((i) => i._id !== action.payload._id);
            calculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            calculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        increaseItem: (state, action) => {
            const item = state.items.find(i => i._id === action.payload._id);
            if (item) item.quantity++;
            calculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        decreaseItem: (state, action) => {
            const item = state.items.find((i) => i._id === action.payload._id);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else {
                state.items = state.items.filter((item) => item._id !== action.payload._id);
            }
            calculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
    }
})

export const { addToCart, removeItemFromCart, clearCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;