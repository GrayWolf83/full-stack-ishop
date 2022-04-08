import React, { useState } from 'react'
import TextField from '../components/common/form/TextField'
import ProductList from '../components/common/ProductList'
import RowContainer from '../components/common/RowContainer'
import SortBar from '../components/ui/Sortbar'
import Toolbar from '../components/ui/Toolbar'
import CartNavbar from '../components/ui/CartNavbar'
import { useSelector } from 'react-redux'
import { getProductsList } from '../store/products'

const HomePage = () => {
	const [search, setSearch] = useState('')
	const products = useSelector(getProductsList())

	const handleChange = (target) => {
		setSearch(target.value)
	}

	const visibledProducts = products.filter((item) => item.isVisible)

	const searchedProducts = search
		? visibledProducts.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase()),
		  )
		: visibledProducts

	return (
		<>
			<RowContainer>
				<div className='offset-md-1 col-md-10 mt-3'>
					<TextField
						value={search}
						onChange={handleChange}
						name={'search'}
						placeholder='Поиск...'
					/>
				</div>
			</RowContainer>
			<RowContainer>
				<div className='col-md-4'>
					<Toolbar />
				</div>
				<div className='col-md-8'>
					<SortBar />
				</div>
			</RowContainer>
			<RowContainer>
				<ProductList products={searchedProducts} />
			</RowContainer>
			<CartNavbar />
		</>
	)
}

export default HomePage
