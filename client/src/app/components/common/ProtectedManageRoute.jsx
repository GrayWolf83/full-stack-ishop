import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getCurrentUser } from '../../store/users'

const ProtectedManageRoute = ({ children }) => {
	const currentUser = useSelector(getCurrentUser())

	if (currentUser?.role === 'manage') {
		return children
	}

	return <Navigate to={'/'} />
}

ProtectedManageRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
}

export default ProtectedManageRoute
