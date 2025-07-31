import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allProductsApi = createApi({
    reducerPath: "allProducts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com",
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products"
        }),
    }),
})

export const productByIdApi = createApi({
    reducerPath: "productById",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fakestoreapi.com`,
    }),
    endpoints: (builder) => ({
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
})

export const { useGetAllProductsQuery } = allProductsApi;
export const { useGetProductByIdQuery } = productByIdApi;