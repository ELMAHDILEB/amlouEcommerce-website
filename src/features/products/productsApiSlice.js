import { apiSlice } from "../../services/apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ search, category, price, sort}) =>{
                const params = new URLSearchParams()
                if(search) params.append("search", search);
                if(category && category !== "All") params.append("category", category);
                if(price) params.append("maxPrice", price);
                if(sort) params.append("sort", sort);
                return `/products?${params.toString()}`
            },
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