import cartReducer from './cart'
import categoriesReducer from './categories'
import usersReducer from './users'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
	categories: categoriesReducer,
	users: usersReducer,
	cart: cartReducer,
})

export function createStore() {
	return configureStore({
		reducer: rootReducer,
	})
}
