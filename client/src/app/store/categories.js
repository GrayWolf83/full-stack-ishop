import { createSlice } from '@reduxjs/toolkit'
import categoryService from '../services/categories.service'

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		entities: null,
		isLoading: true,
		error: null,
		dataLoaded: false,
	},
	reducers: {
		categoriesRequested: (state) => {
			state.isLoading = true
		},
		categoriesReceived: (state, action) => {
			state.entities = action.payload
			state.dataLoaded = true
			state.isLoading = false
		},
		categoriesRequestFailed: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},
	},
})

const { reducer: categoriesReducer, actions } = categoriesSlice
const { categoriesRequested, categoriesReceived, categoriesRequestFailed } =
	actions

export const loadCategoriesList = () => async (dispatch) => {
	dispatch(categoriesRequested())
	try {
		const content = await categoryService.getList()
		dispatch(categoriesReceived(content))
	} catch (error) {
		dispatch(categoriesRequestFailed(error.message))
	}
}

export const getCategoriesList = () => (state) => state.categories.entities
export const getCategoriesDataLoadedStatus = () => (state) =>
	state.categories.dataLoaded
export const getCategoriesLoadingStatus = () => (state) =>
	state.categories.isLoading

export default categoriesReducer
