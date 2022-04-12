import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editOrder } from '../../store/orders'
import { getCurrentUserData } from '../../store/users'

const NextOrderStatusButton = ({ status, id, manageId }) => {
	const dispatch = useDispatch()
	const currentUser = useSelector(getCurrentUserData())

	if (currentUser.role !== 'manage' || currentUser._id !== manageId) {
		return <></>
	}

	switch (status) {
		case 'pending':
			const handleSendingClick = () => {
				dispatch(
					editOrder({
						status: 'delivery',
						_id: id,
					}),
				)
			}
			return (
				<button
					className='btn btn-secondary'
					onClick={handleSendingClick}>
					Отправить получателю
				</button>
			)

		case 'delivery':
			const handleExecutedClick = () => {
				dispatch(
					editOrder({
						status: 'executed',
						_id: id,
					}),
				)
			}
			return (
				<button
					className='btn btn-secondary'
					onClick={handleExecutedClick}>
					Отметить доставку
				</button>
			)

		default:
			return <></>
	}
}

export default NextOrderStatusButton
