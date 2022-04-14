import React, { useState } from 'react'
import TextField from '../components/common/form/TextField'
import ProductList from '../components/common/ProductList'
import SortBar from '../components/ui/Sortbar'
import Toolbar from '../components/ui/Toolbar'
import { useSelector } from 'react-redux'
import { getProductsList } from '../store/products'
import CartButton from '../components/ui/CartButton'
import Pagination from '../components/common/Pagination'
import { paginate } from '../utils/paginate'

const HomePage = () => {
	const products = useSelector(getProductsList())
	const [sort, setSort] = useState({ line: 'cost', method: 'ask' })
	const [filterByCategory, setFilter] = useState(null)
	const [search, setSearch] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 4

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const visibledProducts = products.filter((item) => item.isVisible)

	const searchedProducts = search
		? visibledProducts.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase()),
		  )
		: visibledProducts

	const filteredProducts = filterByCategory
		? searchedProducts.filter((item) => item.category === filterByCategory)
		: searchedProducts

	const sortedProducts =
		sort.method === 'ask'
			? filteredProducts.sort((a, b) =>
					a[sort.line] < b[sort.line] ? 1 : -1,
			  )
			: filteredProducts.sort((a, b) =>
					a[sort.line] > b[sort.line] ? 1 : -1,
			  )

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}

	const handleChangeCategoryFilter = (value) => {
		setCurrentPage(1)
		setFilter(value)
	}

	const count = sortedProducts.length
	const productsCrop = paginate(sortedProducts, currentPage, pageSize)

	return (
		<div className='container'>
			<div className='row'>
				<div className='offset-md-1 col-md-10 mt-3'>
					<TextField
						value={search}
						onChange={handleChange}
						name={'search'}
						placeholder='Поиск...'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-4 d-flex align-items-start mb-3'>
					<Toolbar onChange={handleChangeCategoryFilter} />
				</div>
				<div className='col-md-8'>
					<SortBar onClick={setSort} sortValue={sort} />
				</div>
			</div>
			<div className='row'>
				<ProductList products={productsCrop} />
				<div className='mt-3 d-flex justify-content-center'>
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
			<CartButton />
		</div>
	)
}

export default HomePage
