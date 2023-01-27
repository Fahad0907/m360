import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightApi = createApi({
  reducerPath: "flightApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/" }),
  endpoints: (builder) => ({
    getAllFlight: builder.query({
      query: () => "v3/launches",
    }),
  }),
});
export const { useGetAllFlightQuery } = flightApi;
