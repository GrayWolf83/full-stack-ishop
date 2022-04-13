import React from 'react'
import AuthLoader from '../hoc/useAuthLoader'
import CategoriesLoader from '../hoc/useCategoriesLoader'
import OrdersLoader from '../hoc/useOrdersLoader'
import ProductsLoader from '../hoc/useProductsLoader'

const DataLoader = ({ children }) => {
	return (
		<CategoriesLoader>
			<ProductsLoader>
				<AuthLoader>
					<OrdersLoader>{children}</OrdersLoader>
				</AuthLoader>
			</ProductsLoader>
		</CategoriesLoader>
	)
}

export default DataLoader
