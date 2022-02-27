import { BaseUri, httpVerbs } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "category";

export const categoryApi = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUri,
        prepareHeaders: (headers) => {
            const token = localStorage.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    tagTypes: [url],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => url,
            providesTags: [url]
        }),
        upsertCategory: builder.mutation({
            query: ({ method, body }) => ({ url, method, body }),
            invalidatesTags: [url]
        }),
        deleteCategory: builder.mutation({
            query: (resourceId) => ({ url: `${url}/${resourceId}`, method: httpVerbs.DELETE }),
            invalidatesTags: [url]
        })
    })
});

export const { useGetCategoriesQuery, useUpsertCategoryMutation, useDeleteCategoryMutation } = categoryApi;