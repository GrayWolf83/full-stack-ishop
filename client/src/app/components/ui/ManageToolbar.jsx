import React from 'react'
import { NavLink } from 'react-router-dom'

const ManageToolbar = () => {
	return (
		<div className='row'>
			<div className='btn-group my-2'>
				<NavLink to={''} className='btn btn-secondary me-2 shadow'>
					Товары
				</NavLink>
				<NavLink to={'orders'} className='btn btn-secondary shadow'>
					Заказы
				</NavLink>
			</div>
		</div>
	)
}

export default ManageToolbar
