import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getCurrentUser } from '../../store/users'

const ProtectedManageRoute = ({ children }) => {
	const currentUser = useSelector(getCurrentUser())

	if (currentUser?.role === 'manage') {
		return children
	}

	return <Navigate to={'/'} />
}

export default ProtectedManageRoute
