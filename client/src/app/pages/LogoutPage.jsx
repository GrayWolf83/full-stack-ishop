import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logOut } from '../store/users'

const LogOutPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(logOut())
	}, [dispatch])
	return <Navigate to='/' />
}

export default LogOutPage
