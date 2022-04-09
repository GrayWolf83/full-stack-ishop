import React, { useState } from 'react'
import TextField from '../components/common/form/TextField'
import ProductList from '../components/common/ProductList'
import RowContainer from '../components/common/RowContainer'
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

	const handleChange = (target) => {
		setSearch(target.value)
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

	const count = sortedProducts.length
	const productsCrop = paginate(sortedProducts, currentPage, pageSize)

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
				<div className='col-md-4 d-flex align-items-start mb-3'>
					<Toolbar onChange={setFilter} />
				</div>
				<div className='col-md-8'>
					<SortBar onClick={setSort} sortValue={sort} />
				</div>
			</RowContainer>
			<RowContainer>
				<ProductList products={productsCrop} />
				<div className='mt-3 d-flex justify-content-center'>
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</RowContainer>
			<CartButton />
		</>
	)
}

export default HomePage
