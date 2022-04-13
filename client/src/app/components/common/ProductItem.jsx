import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getCurrentUserId } from '../../store/users'
import { Link } from 'react-router-dom'

const ProductItem = ({ item, clickHandler }) => {
	const currentUserId = useSelector(getCurrentUserId())

	return (
		<div className='col'>
			<div className='card shadow h-100'>
				<img src={item.image} className='card-img' alt='...' />
				<div className='card-body py-1'>
					<h5 className='card-title mb-0'>{item.name}</h5>
					<p className='card-text mb-0'>Модель: {item.model}</p>
					<p className='card-text text-secondary'>
						Цена: {item.cost} ₽
					</p>
				</div>
				<div className='card-footer d-flex justify-content-between'>
					<Link
						to={`/product/${item._id}`}
						className='btn btn-secondary'>
						Подробнее
					</Link>
					<button
						className='btn btn-secondary'
						disabled={item.manageId === currentUserId}
						onClick={() => clickHandler(item)}>
						В корзину
					</button>
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
	item: PropTypes.object.isRequired,
	clickHandler: PropTypes.func.isRequired,
}

export default ProductItem
