"use client";

import { baseApi } from "../base";

import { endpoints } from "@/config/endpoints";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data: any) => ({
        url: endpoints.endpointAuth.REGISTER,
        method: "POST",
        body: { data },
        flashError: true,
      }),
    }),
    login: build.mutation({
      query: (data: any) => ({
        url: endpoints.endpointAuth.LOGIN,
        method: "GET",
        body: { data },
        flashError: true,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPI;
