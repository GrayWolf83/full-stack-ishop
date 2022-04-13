import httpService from './http.service'

const endpoint = 'order/'

const orderService = {
	getUserList: async () => {
		const { data } = await httpService.get(endpoint + 'user')
		return data
	},
	getManageList: async () => {
		const { data } = await httpService.get(endpoint + 'manage')
		return data
	},

	addOrder: async (payload) => {
		const { data } = await httpService.post(endpoint, payload)
		return data
	},
	editOrder: async (payload) => {
		const { data } = await httpService.patch(endpoint, payload)
		return data
	},
}
export default orderService
