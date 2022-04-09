import React from 'react'
import AuthLoader from '../hoc/useAuthLoader'
import CategoriesLoader from '../hoc/useCategoriesLoader'
import ProductsLoader from '../hoc/useProductsLoader'

const DataLoader = ({ children }) => {
	return (
		<CategoriesLoader>
			<ProductsLoader>
				<AuthLoader>{children}</AuthLoader>
			</ProductsLoader>
		</CategoriesLoader>
	)
}

export default DataLoader
