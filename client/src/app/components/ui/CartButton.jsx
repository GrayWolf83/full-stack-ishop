import React from 'react'
import { useSelector } from 'react-redux'
import { getCartCount } from '../../store/cart'

const CartButton = () => {
	const count = useSelector(getCartCount())

	return (
		<button
			type='button'
			className='btn btn-secondary rounded-circle shadow cart-home'
			data-bs-toggle='modal'
			data-bs-target='#cart'>
			<i className='bi bi-cart-check-fill fs-2 text-light' />
			<span className='position-absolute top-50 start-100 translate-middle badge rounded-pill bg-light text-secondary pt-1 me-2'>
				{count}
			</span>
		</button>
	)
}

export default CartButton
