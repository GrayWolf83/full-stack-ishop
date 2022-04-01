import React from 'react'
import { Outlet } from 'react-router-dom'
import ManageToolbar from '../components/ui/ManageToolbar'

const Manage = () => {
	return (
		<div className='container'>
			<ManageToolbar />
			<Outlet />
		</div>
	)
}

export default Manage
