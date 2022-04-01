import React, { useState } from 'react'
import ManageToolbar from '../../components/ui/ManageToolbar'
import ProductsPage from './ProductsPage'
import OrdersPage from './OrdersPage'

const ManagePage = () => {
	const [page, setPage] = useState('')

	const getManagePage = () => {
		switch (page) {
			case 'OrdersPage':
				return <OrdersPage />

			default:
				return <ProductsPage />
		}
	}

	return (
		<div className='container'>
			<ManageToolbar onClick={setPage} />
			{getManagePage()}
		</div>
	)
}

export default ManagePage
