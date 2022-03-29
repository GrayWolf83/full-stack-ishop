import httpService from './http.service'
import localStorageService from './localStorage.service'

const authEndpoint = 'auth/'

const authService = {
	register: async (payload) => {
		const { data } = await httpService.post(
			authEndpoint + 'signUp',
			payload,
		)

		return data
	},
	login: async (payload) => {
		const { data } = await httpService.post(
			authEndpoint + 'signInWidthPassword',
			payload,
		)
		return data
	},
	refresh: async () => {
		const { data } = await httpService.post(authEndpoint + 'token', {
			refresh_token: localStorageService.getRefreshToken(),
		})
		return data
	},
}

export default authService
