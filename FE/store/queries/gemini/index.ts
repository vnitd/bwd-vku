"use client";

import { baseApi } from "../base";

import { endpoints } from "@/config/endpoints";

export const geminiAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postGemini: build.mutation({
      query: (data: any) => ({
        url: endpoints.endpointGemini.POST,
        method: "POST",
        body: { data },
        flashError: true,
      }),
    }),
  }),
});

export const { usePostGeminiMutation } = geminiAPI;
