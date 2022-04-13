// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7265/api/" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books`,
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `books/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery, useGetBookByIdQuery } = bookApi;
