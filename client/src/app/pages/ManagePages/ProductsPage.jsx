import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserData } from '../../store/users'
import {
	editProduct,
	getProductsList,
	removeProduct,
} from '../../store/products'
import { NavLink } from 'react-router-dom'

const ProductsPage = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector(getCurrentUserData())
	const products = useSelector(getProductsList())

	const currentUserProducts = products.filter(
		(item) => item.manageId === currentUser._id,
	)

	const productRemoveHandler = (id) => {
		dispatch(removeProduct(id))
	}

	const productChangeIsVisibleHandler = (product) => {
		dispatch(
			editProduct({
				...product,
				isVisible: !product.isVisible,
			}),
		)
	}

	return (
		<>
			<div className='d-flex justify-content-between'>
				<h3 className='my-2'>Товары</h3>{' '}
				<NavLink
					to='add'
					className='btn btn-secondary shadow d-flex align-items-center'>
					<i className='bi bi-plus-square text-white me-2 fs-5' />
					Добавить
				</NavLink>
			</div>

			{currentUserProducts &&
				currentUserProducts.map((item) => (
					<div
						className='row my-2 bg-light rounded shadow'
						key={item._id}>
						<div className='col-4'>
							<img
								src={item.image}
								height='100'
								className='rounded me-2 my-2'
								alt=''
							/>
						</div>
						<div className='col-4'>
							<p className='my-2 fs-5 fw-bold'>{item.name}</p>
							<p className='my-2'>{item.description}</p>
						</div>
						<div className='col-4 text-end'>
							<p className='my-2'>Цена: {item.cost} руб.</p>
							<i
								className={
									'bi text-secondary fs-3 bi-eye' +
									(!item.isVisible ? '-slash' : '')
								}
								onClick={() =>
									productChangeIsVisibleHandler(item)
								}></i>
							<NavLink to={'/manage/edit/' + item._id}>
								<i className='bi bi-pencil-fill text-secondary fs-3 mx-3' />
							</NavLink>

							<i
								className='bi bi-trash-fill text-danger fs-3'
								onClick={() => productRemoveHandler(item._id)}
							/>
						</div>
					</div>
				))}
		</>
	)
}

export default ProductsPage
