import httpService from './http.service'

const productEndpoint = 'product/'

const productService = {
	getList: async () => {
		const { data } = await httpService.get(productEndpoint)
		return data
	},
	addProduct: async (payload) => {
		const { data } = await httpService.post(productEndpoint, payload)
		return data
	},
	removeProduct: async (id) => {
		const { data } = await httpService.delete(productEndpoint + id)
		return data
	},
	editProduct: async (payload) => {
		const { data } = await httpService.patch(productEndpoint, payload)
		return data
	},
}
export default productService
