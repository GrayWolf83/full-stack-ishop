import React from 'react'
import { useSelector } from 'react-redux'
import { getManageOrdersList } from '../../store/orders'
import OrdersList from '../../components/common/OrdersList'

const OrdersPage = () => {
	const manageOrders = useSelector(getManageOrdersList())

	return (
		<>
			<h3 className='my-2'>Заказы</h3>
			{manageOrders && <OrdersList orders={manageOrders} />}
		</>
	)
}

export default OrdersPage
