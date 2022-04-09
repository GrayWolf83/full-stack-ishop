import cartReducer from './cart'
import categoriesReducer from './categories'
import productsReducer from './products'
import usersReducer from './users'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
	categories: categoriesReducer,
	users: usersReducer,
	cart: cartReducer,
	products: productsReducer,
})

export function createStore() {
	return configureStore({
		reducer: rootReducer,
	})
}
