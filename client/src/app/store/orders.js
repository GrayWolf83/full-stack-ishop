import { createSlice } from '@reduxjs/toolkit'
import orderService from '../services/order.service'

const orderSlice = createSlice({
	name: 'orders',
	initialState: {
		entities: null,
		manageEntities: null,
		isLoading: true,
		error: null,
		changed: 0,
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
		ordersManageReceived: (state, action) => {
			state.manageEntities = action.payload
			state.dataLoaded = true
			state.isLoading = false
		},
		ordersRequestFailed: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
		orderItemCreated: (state, action) => {
			state.entities = [...state.entities, ...action.payload]
			state.changed = state.changed + 1
		},
		orderItemEdited: (state, action) => {
			state.entities = state.entities.map((item) => {
				if (item._id === action.payload._id) {
					return action.payload
				}

				return item
			})
			state.changed = state.changed + 1
		},
	},
})

const { reducer: ordersReducer, actions } = orderSlice
const {
	ordersRequested,
	ordersReceived,
	ordersManageReceived,
	ordersRequestFailed,
	orderItemCreated,
	orderItemEdited,
} = actions

export const loadOrdersList = () => async (dispatch) => {
	dispatch(ordersRequested())
	try {
		const content = await orderService.getUserList()
		dispatch(ordersReceived(content))
	} catch (error) {
		dispatch(ordersRequestFailed(error.message))
	}
}

export const loadManageOrdersList = () => async (dispatch) => {
	dispatch(ordersRequested())
	try {
		const content = await orderService.getManageList()
		dispatch(ordersManageReceived(content))
	} catch (error) {
		dispatch(ordersRequestFailed(error.message))
	}
}

export const addOrder = (payload) => async (dispatch) => {
	try {
		const content = await orderService.addOrder(payload)
		dispatch(orderItemCreated(content))
	} catch (error) {
		dispatch(ordersRequestFailed(error.message))
	}
}

export const editOrder = (payload) => async (dispatch) => {
	try {
		const content = await orderService.editOrder(payload)
		dispatch(orderItemEdited(content))
	} catch (error) {
		dispatch(ordersRequestFailed(error.message))
	}
}

export const getOrdersList = () => (state) => state.orders.entities
export const getManageOrdersList = () => (state) => state.orders.manageEntities
export const getOrdersChangedStatus = () => (state) => state.orders.changed
export const getOrdersLoadingStatus = () => (state) => state.orders.isLoading

export default ordersReducer
