import { createSlice } from '@reduxjs/toolkit'
import orderService from '../services/order.service'

const orderSlice = createSlice({
	name: 'orders',
	initialState: {
		entities: null,
		isLoading: true,
		error: null,
		dataLoaded: false,
	},
	reducers: {
		ordersRequested: (state) => {
			state.isLoading = true
		},
		ordersReceived: (state, action) => {
			state.entities = action.payload
			state.dataLoaded = true
			state.isLoading = false
		},
		productsRequestFailed: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		orderItemCreated: (state, action) => {
			state.entities = [...state.entities, ...action.payload]
		},
		orderItemEdited: (state, action) => {
			state.entities = state.entities.map((item) => {
				if (item._id === action.payload._id) {
					return action.payload
				}

				return item
			})
		},
	},
})

const { reducer: ordersReducer, actions } = orderSlice
const {
	ordersRequested,
	ordersReceived,
	ordersRequestFailed,
	orderItemCreated,
	orderItemEdited,
} = actions

export const loadProductsList = () => async (dispatch) => {
	dispatch(productsRequested())
	try {
		const content = await productService.getList()
		dispatch(productsReceived(content))
	} catch (error) {
		dispatch(productsRequestFailed(error.message))
	}
}

export const addProduct = (payload) => async (dispatch) => {
	try {
		const content = await productService.addProduct(payload)
		dispatch(productItemCreated(content))
	} catch (error) {
		dispatch(productsRequestFailed(error.message))
	}
}

export const editProduct = (payload) => async (dispatch) => {
	try {
		const content = await productService.editProduct(payload)
		dispatch(productItemEdited(content))
	} catch (error) {
		dispatch(productsRequestFailed(error.message))
	}
}

export const removeProduct = (id) => async (dispatch) => {
	try {
		const content = await productService.removeProduct(id)
		dispatch(productItemRemoved(content))
	} catch (error) {
		dispatch(productsRequestFailed(error.message))
	}
}

export const getProductsList = () => (state) => state.products.entities
export const getProductById = (id) => (state) =>
	state.products.entities.find((item) => item._id === id)
export const getProductsDataLoadedStatus = () => (state) =>
	state.products.dataLoaded
export const getProductsLoadingStatus = () => (state) =>
	state.products.isLoading

export default productsReducer
