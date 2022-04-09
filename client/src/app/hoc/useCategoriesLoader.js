import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import {
	getCategoriesDataLoadedStatus,
	getCategoriesLoadingStatus,
	loadCategoriesList,
} from '../store/categories'

const CategoriesLoader = ({ children }) => {
	const isLoading = useSelector(getCategoriesLoadingStatus())
	const dataLoaded = useSelector(getCategoriesDataLoadedStatus())
	const dispatch = useDispatch()

	useEffect(() => {
		if (!dataLoaded) dispatch(loadCategoriesList())
	}, [dataLoaded, dispatch])

	if (isLoading) return <Loader />

	return children
}

export default CategoriesLoader
