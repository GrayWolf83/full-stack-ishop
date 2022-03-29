import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserId, getIsLoading, loadCurrentUser } from '../store/users'
import Loader from '../components/common/Loader'

const CurrentUserLoader = ({ children }) => {
	const isLoading = useSelector(getIsLoading())
	const isAuth = useSelector(getCurrentUserId())
	const dispatch = useDispatch()

	useEffect(() => {
		if (isAuth) dispatch(loadCurrentUser())
	}, [isAuth, dispatch])

	if (isLoading) return <Loader />

	return children
}

export default CurrentUserLoader
