// src/Redux/Api/Api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001', // Your backend URL
    responseHandler: async (response) => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      }
      // Fallback to text if not JSON (avoid parsing errors)
      return response.text();
    },
  }),
  endpoints: (builder) => ({
    addToCollection: builder.mutation({
      query: (formData) => ({
        url: '/Watches/Collection',  // Make sure this endpoint exists in backend
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useAddToCollectionMutation } = productApi;
