import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import OrdersList from '../components/common/OrdersList'
import { getOrdersList } from '../store/orders'
import { getCurrentUserData } from '../store/users'

const ProfilePage = () => {
	const { userId } = useParams()
	const currentUser = useSelector(getCurrentUserData())
	const orders = useSelector(getOrdersList())

	if (!userId || userId !== currentUser._id) {
		return <Navigate to='/' />
	}

	return (
		<div className='container mt-4'>
			<div className='row'>
				<h1>Пользователь: {currentUser.name}</h1>
			</div>
			<p className='fs-4'>
				Статус:{' '}
				{currentUser.role === 'manage' ? 'Продавец' : 'Покупатель'}
			</p>
			<h3 className='fs-4'>Заказы:</h3>
			{orders?.length ? (
				<OrdersList orders={orders} />
			) : (
				<p>У Вас еще нет заказов!</p>
			)}
		</div>
	)
}

export default ProfilePage
