import React from 'react'
import { useSelector } from 'react-redux'
import { getProductById } from '../../store/products'
import { getOrderStatus } from '../../utils/getOrderStatus'
import NextOrderStatusButton from '../ui/NextStatusButton'
import PropTypes from 'prop-types'

const OrdersListItem = ({ order }) => {
	const product = useSelector(getProductById(order.productId))
	const orderStatus = getOrderStatus(order.status)

	return (
		<div className='row mt-2 bg-light'>
			<div className='col-3 mt-2'>
				<img src={product.image} height='100' alt='' />
			</div>
			<div className='col-6 mt-2'>
				<p className='fw-bold'>{product.name}</p>
				<p>Модель: {product.model}</p>
			</div>
			<div className='col-3 mt-2'>
				<p className='text-end'>Количество: {order.count}</p>
			</div>
			<div className='col-6 col-md-3 mt-2'>
				<p>Цена: {product.cost} ₽</p>
			</div>

			<div className='col-6 col-md-3 mt-2'>
				<p>
					Дата заказа:{' '}
					{new Date(order.createdAt).toLocaleDateString()}
				</p>
			</div>
			<div className='col-6 col-md-3 mt-2'>
				<p className={`text-${orderStatus.color}`}>
					Статус: {orderStatus.text}
				</p>
				<p>
					<NextOrderStatusButton
						status={order.status}
						id={order._id}
						manageId={order.manageId}
					/>
				</p>
			</div>
			<div className='col-6 col-md-3 mt-2'>
				<p>
					Дата изменения:{' '}
					{new Date(order.updatedAt).toLocaleDateString()}
				</p>
			</div>
		</div>
	)
}

OrdersListItem.propTypes = {
	orders: PropTypes.object,
}

export default OrdersListItem
