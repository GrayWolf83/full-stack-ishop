import httpService from './http.service'

const userEndpoint = 'user/'

const userService = {
	getCurrentUser: async () => {
		const { data } = await httpService.get(userEndpoint)
		return data
	},
}
export default userService
