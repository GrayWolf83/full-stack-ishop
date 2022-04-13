import cartReducer from './cart'
import categoriesReducer from './categories'
import ordersReducer from './orders'
import productsReducer from './products'
import usersReducer from './users'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
	categories: categoriesReducer,
	users: usersReducer,
	cart: cartReducer,
	products: productsReducer,
	orders: ordersReducer,
})

export function createStore() {
	return configureStore({
		reducer: rootReducer,
	})
}
