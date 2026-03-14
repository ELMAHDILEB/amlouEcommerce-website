import { apiSlice } from "../../services/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersCount: builder.query({
      query: () => "/admin/users/count",
      providesTags: ["UsersCount"],
    }),
    getProductsCount: builder.query({
      query: () => "/admin/products/count",
      providesTags: ["ProductsCount"],
    }),
    getOrdersCount: builder.query({
      query: () => "/admin/orders/count",
      providesTags: ["OrdersCount"],
    }),
  }),
});

export const {
  useGetUsersCountQuery,
  useGetProductsCountQuery,
  useGetOrdersCountQuery,
} = adminApiSlice;