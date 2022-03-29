import React from 'react'

const CartNavbar = ({ count }) => {
	return (
		<button
			type='button'
			className='btn position-relative me-2'
			data-bs-toggle='modal'
			data-bs-target='#cart'>
			<i className='bi bi-cart-check-fill fs-2' />
			<span className='position-absolute top-50 start-100 translate-middle badge rounded-pill bg-light text-secondary pt-2'>
				{count}
			</span>
		</button>
	)
}

export default CartNavbar
