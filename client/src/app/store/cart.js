import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		entities: [],
	},
	reducers: {
		cartAddItem: (state, action) => {
			state.entities = state.entities.some(
				(cartItem) => cartItem._id === action.payload._id,
			)
				? (state.entities = state.entities.map((item) => {
						if (item._id === action.payload._id) {
							return {
								...item,
								count: item.count + 1,
							}
						}

						return item
				  }))
				: [...state.entities, action.payload]
		},
		cartIncrementItem: (state, action) => {
			state.entities = state.entities.map((item) => {
				if (item._id === action.payload) {
					return {
						...item,
						count: item.count + 1,
					}
				}

				return item
			})
		},
		cartDecrementItem: (state, action) => {
			state.entities = state.entities.map((item) => {
				if (item._id === action.payload) {
					return {
						...item,
						count: item.count - 1,
					}
				}

				return item
			})
		},
		cartRemoveItem: (state, action) => {
			state.entities = state.entities.filter(
				(item) => item._id !== action.payload,
			)
		},
		cartClear: (state) => {
			state.entities = []
		},
	},
})

const { reducer: cartReducer, actions } = cartSlice
const {
	cartAddItem,
	cartIncrementItem,
	cartDecrementItem,
	cartRemoveItem,
	cartClear,
} = actions

export const addCartItem = (item) => (dispatch) => {
	dispatch(cartAddItem(item))
}

export const incrementCartItem = (id) => (dispatch) => {
	dispatch(cartIncrementItem(id))
}

export const decrementCartItem = (id) => (dispatch) => {
	dispatch(cartDecrementItem(id))
}

export const removeCartItem = (id) => (dispatch) => {
	dispatch(cartRemoveItem(id))
}

export const clearCart = () => (dispatch) => {
	dispatch(cartClear())
}

export const getCart = () => (state) => state.cart.entities
export const getCartCount = () => (state) => state.cart.entities.length

export default cartReducer
