import { createSlice } from "@reduxjs/toolkit";
import { productsApiSlice } from "./productsApiSlice";


const initialState = {
    search: "",
    category: "all",
    sort:"all",
    price: 200,
    page:1
}
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        setSearch: (state, action)=> { 
            state.search = action.payload
            state.page = 1
         },
        setCategory: (state, action) => { 
            state.category = action.payload
            state.page = 1
         },
        setSort: (state, action) => {
            state.sort = action.payload
            state.page = 1
        },
        setPrice: (state, action) => {
            state.price = action.payload
            state.page = 1
        },
        setPage: (state, action) => {
            state.page = action.payload
            state.page = 1
        }
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
export const { setSearch, setCategory, setSort, setPrice, setPage } = productsSlice.actions;