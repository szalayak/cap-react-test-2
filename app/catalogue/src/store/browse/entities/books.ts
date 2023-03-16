import { browseApi } from "..";

export const booksApi = browseApi.injectEndpoints({
	endpoints: (builder) => ({
		getBooks: builder.query<Book[], Record<string, never>>({
			query: () => ({
				url: `Books`
			}),
			transformResponse: (response: BookResponse) => {
				return response.value
			},
			providesTags: ["Book"]
		})
	}),
	overrideExisting: false,
})

export const { useGetBooksQuery } = booksApi