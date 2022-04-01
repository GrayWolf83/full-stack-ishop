import httpService from './http.service'

const categoryEndpoint = 'category/'

const categoryService = {
	getList: async () => {
		const { data } = await httpService.get(categoryEndpoint)
		console.log('data', data)
		return data
	},
}
export default categoryService
