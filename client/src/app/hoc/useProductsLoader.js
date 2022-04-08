import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader'
import {
	getProductsDataLoadedStatus,
	getProductsLoadingStatus,
	loadProductsList,
} from '../store/products'

const ProductsLoader = ({ children }) => {
	const isLoading = useSelector(getProductsLoadingStatus())
	const dataLoaded = useSelector(getProductsDataLoadedStatus())
	const dispatch = useDispatch()

	useEffect(() => {
		if (!dataLoaded) dispatch(loadProductsList())
	}, [dataLoaded, dispatch])

	if (isLoading) return <Loader />

	return children
}

export default ProductsLoader
