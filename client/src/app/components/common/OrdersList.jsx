import React from 'react'
import OrdersListItem from './OrdersListItem'
import PropTypes from 'prop-types'

const OrdersList = ({ orders }) => {
	const myOrders = [...new Set(orders.map((item) => item.number))]

	return (
		<>
			<div className='accordion accordion-flush' id='userOrder'>
				{myOrders?.length &&
					myOrders.map((order) => {
						const orderItems = orders.filter(
							(item) => item.number === order,
						)

						const orderDate = orders.find(
							(item) => item.number === order,
						).createdAt

						return (
							<div className='accordion-item' key={order}>
								<h2 className='accordion-header' id={order + 1}>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target={'#a' + order}
										aria-expanded='false'
										aria-controls='flush-collapseOne'>
										<p className='w-100 d-flex justify-content-between mb-0'>
											<span className='me-2 fs-5 fw-bold'>
												Заказ № {order}
											</span>
											<span className='me-2 fs-5'>
												Дата заказа:{' '}
												{new Date(
													orderDate,
												).toLocaleDateString()}
											</span>
										</p>
									</button>
								</h2>
								<div
									id={'a' + order}
									className='accordion-collapse collapse'
									aria-labelledby='flush-headingOne'
									data-bs-parent='#accordionFlushExample'>
									<div className='accordion-body'>
										{orderItems.map((item) => (
											<OrdersListItem
												order={item}
												key={item._id}
											/>
										))}
									</div>
								</div>
							</div>
						)
					})}
			</div>
		</>
	)
}

OrdersList.propTypes = {
	orders: PropTypes.array,
}

export default OrdersList
