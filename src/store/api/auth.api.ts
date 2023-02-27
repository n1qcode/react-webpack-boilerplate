import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IAuth } from "./auth.typings";

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "todo" }),
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation<unknown, IAuth>({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation<unknown, unknown>({
      query: (body) => ({
        url: "/todo",
        method: "POST",
        body,
      }),
    }),
    logout: builder.query<unknown, unknown>({
      query: (body) => ({
        url: "/todo",
        body,
      }),
    }),
    refresh: builder.query<unknown, unknown>({
      query: (body) => ({
        url: "/todo",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLazyLogoutQuery,
  useLazyRefreshQuery,
} = authApi;

export default authApi;
