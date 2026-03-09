// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { apiSlice } from "../../services/apiSlice";


// export const fetchProducts = createAsyncThunk("products/fetchProducts",
//     async (_, thunkAPI) => {
//         try {
//             const res = await api.get("/products"); 
//             return res.data;
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
//         }
//     }
// );


// export const productsSlice = createSlice({
//     name: "products",
//     initialState: {
//         items: [],
//         loading: false,
//         error: null
//     },
//     reducers: {},

//     extraReducers: (builder) => {
//         builder.addCase(fetchProducts.pending, (state) => {
//             state.loading = true;
//         })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             })
//     }
// })

// export default productsSlice.reducer;




export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["Product"],
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{ type: "Product", id }],
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductsByIdQuery,
    useCreateProductMutation
} = productsApiSlice;