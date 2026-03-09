import { apiSlice } from "../../services/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart",
    }),
    addCartToServer: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    removeItemServer: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    clearCartServer: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
    }),
  }),
});


export const {
  useGetCartQuery,
  useAddCartToServerMutation,
  useRemoveItemServerMutation,
  useClearCartServerMutation,
} = cartApiSlice;