import {  createSlice } from "@reduxjs/toolkit"

const savedItem = localStorage.getItem("cartItems");

const initialState = {
    items: savedItem ? JSON.parse(savedItem) : []
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += action.payload.quantity || 1;
            }else{
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action)=>{
                    state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        removeCart: (state)=>{
                   state.items=[];
        },
        increaseItem: (state, action)=>{
            const item = state.items.find(i=> i.id === action.payload.id)
            if(item) item.quantity++;
        },
        decreaseItem: (state, action)=>{
            const item = state.items.find(i=> i.id === action.payload.id);
            if(item && item.quantity > 1) {
                item.quantity--;
            }else{
                state.items = state.items.filter(item=> item.id !== action.payload.id)
            }
        }
    }
})

export const {addToCart, removeFromCart, removeCart, increaseItem, decreaseItem} = cartSlice.actions;
export default cartSlice.reducer;