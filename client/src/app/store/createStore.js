// import productReducer from './products'
import usersReducer from './users'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
    // products: productReducer,
    users: usersReducer,
})

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}
