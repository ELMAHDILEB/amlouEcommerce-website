import { createSlice } from "@reduxjs/toolkit";
import { productsApiSlice } from "./productsApiSlice";


const initialState = {
    search: "",
    category: "all",
    sort:"all",
    price: 200,
}
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setSearch: (state, action)=> { state.search = action.payload },
        setCategory: (state, action) => { state.category = action.payload },
        setSort: (state, action) => {state.sort = action.payload },
        setPrice: (state, action) => {state.price = action.payload}
    },
    extraReducers:(builder)=>{
            builder.addMatcher(
                productsApiSlice.endpoints.getProducts.matchFulfilled,
                (state, action)=>{
                    state.products = action.payload;
                }
            )
    }
})

export const productsReducer = productsSlice.reducer;
export const { setSearch, setCategory, setSort, setPrice } = productsSlice.actions;