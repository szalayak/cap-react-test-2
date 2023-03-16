import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const browseApi = createApi({
	reducerPath: 'browse',
	tagTypes: ["Book"],
	baseQuery: fetchBaseQuery({ baseUrl: "/browse" }),
	endpoints: () => ({}),
})