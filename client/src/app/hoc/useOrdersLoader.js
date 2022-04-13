import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	getOrdersChangedStatus,
	loadManageOrdersList,
	loadOrdersList,
} from '../store/orders'
import { getCurrentUserData } from '../store/users'

const OrdersLoader = ({ children }) => {
	const currentUser = useSelector(getCurrentUserData())
	const ordersChanged = useSelector(getOrdersChangedStatus())
	const dispatch = useDispatch()

	useEffect(() => {
		if (currentUser?._id) {
			dispatch(loadOrdersList())

			if (currentUser.role === 'manage') {
				dispatch(loadManageOrdersList())
			}
		}
	}, [dispatch, currentUser, ordersChanged])

	return children
}

export default OrdersLoader
