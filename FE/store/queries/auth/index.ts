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
        url:
          endpoints.endpointAuth.LOGIN +
          `?acc=${data.acc}&password=${data.password}`,
        method: "GET",
        flashError: true,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authAPI;
