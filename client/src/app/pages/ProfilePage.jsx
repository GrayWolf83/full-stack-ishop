import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { getCurrentUserData } from '../store/users'

const ProfilePage = () => {
	const { userId } = useParams()
	const currentUser = useSelector(getCurrentUserData())

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
		</div>
	)
}

export default ProfilePage
