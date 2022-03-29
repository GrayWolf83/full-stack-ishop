import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../store/users'

const LogOutPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(logOut())
	}, [dispatch])
	return <h1>Loading</h1>
}

export default LogOutPage
