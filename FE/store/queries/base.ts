import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { constants } from "@/config";
import { webStorageClient } from "@/types";

const baseQuery = fetchBaseQuery({
  baseUrl: constants.API_SERVER,
  prepareHeaders: (headers) => {
    const accessToken = webStorageClient.getToken();

    if (accessToken) headers.set("Authorization", accessToken);

    return headers;
  },
});

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
