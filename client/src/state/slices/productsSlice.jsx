import { PRODUCTS_URL, PRODUCTS_VIEW_URL } from "../utils/constant";
import { apiSlice } from "../slices/apiSlice";

export const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooksProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    viewProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_VIEW_URL}${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBooksProductsQuery, useViewProductDetailsQuery } =
  productsSlice;
