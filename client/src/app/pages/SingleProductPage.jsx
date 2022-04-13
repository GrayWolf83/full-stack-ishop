import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getProductById } from '../store/products'

const SingleProductPage = () => {
	const { productId } = useParams()
	const product = useSelector(getProductById(productId))

	if (!productId || !product) {
		return <Navigate to='/' />
	}

	return (
		<div className='container mt-3'>
			<div className='row mb-2'>
				<h3 className='fs-3 fw-bold text-center'>{product.name}</h3>
				<p className='text-center fs-5'>{product.model}</p>
			</div>
			<div className='row'>
				<div className='col-md-4 mb-2'>
					<img
						src={product.image}
						height='250'
						className='d-block mx-auto rounded'
						alt=''
					/>
				</div>
				<div className='col-md-8'>
					<p className='fs-5 fst-italic text-justify'>
						{product.description}
					</p>
					<p className='fs-5 fw-bold'>Цена: {product.cost} ₽</p>
				</div>
			</div>
		</div>
	)
}

export default SingleProductPage
