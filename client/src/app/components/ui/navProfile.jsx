import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentUserData } from '../../store/users'

function NavProfile() {
	const currentUser = useSelector(getCurrentUserData())
	const [isOpen, setOpen] = useState(false)
	const toggleMenu = () => {
		setOpen((prevState) => !prevState)
	}

	return (
		<>
			{currentUser?.role === 'manage' && (
				<Link to={'/manage'}>
					<button className='btn'>
						<i className='bi bi-gear fs-2' />
					</button>
				</Link>
			)}

			<div className='dropdown' onClick={toggleMenu}>
				<div className='btn dropdown-toggle d-flex align-items-center'>
					<div className='me-2'>{currentUser.name}</div>
					<img
						src={currentUser.image}
						alt=''
						height='40'
						className='img-responsive rounded-circle'
					/>
				</div>
				<div
					className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
					<Link
						to={`/profile/${currentUser._id}`}
						className='dropdown-item text-secondary'>
						Профиль
					</Link>
					<Link to='/logout' className='dropdown-item text-secondary'>
						Выйти
					</Link>
				</div>
			</div>
		</>
	)
}

export default NavProfile
