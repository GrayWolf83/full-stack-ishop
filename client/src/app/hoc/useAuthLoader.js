import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLoading, getIsLoggedIn, loadCurrentUser } from '../store/users'
import Loader from '../components/common/Loader'

const AuthLoader = ({ children }) => {
	const isLoading = useSelector(getIsLoading())
	const isLoggedIn = useSelector(getIsLoggedIn())
	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoggedIn) dispatch(loadCurrentUser())
	}, [isLoggedIn, dispatch])

	if (isLoading) return <Loader />

	return children
}

export default AuthLoader
