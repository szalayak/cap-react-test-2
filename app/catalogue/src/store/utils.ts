export const getDefaultHeaders = ({ csrfToken }: { csrfToken?: string }) => {
	const token = csrfToken ? { 'X-CSRF-Token': csrfToken } : {}
	return {
		'Content-Type': 'application/json',
		'X-REQUESTED-WITH': 'XMLHTTPRequest',
		Accept: 'application/json',
		...token,
	}
}