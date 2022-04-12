import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	clearCart,
	decrementCartItem,
	getCart,
	incrementCartItem,
	removeCartItem,
} from '../../store/cart'
import { addOrder } from '../../store/orders'

const Cart = () => {
	const cart = useSelector(getCart())
	const dispatch = useDispatch()

	const getCartCost = () => {
		return cart.reduce((acc, item) => (acc += item.cost * item.count), 0)
	}

	const clearCartHandler = () => {
		dispatch(clearCart())
	}

	const incrementCartItemHandler = (id) => {
		dispatch(incrementCartItem(id))
	}

	const decrementCartItemHandler = (id) => {
		const cartItem = cart.find((item) => item._id === id)
		if (cartItem.count - 1 === 0) {
			dispatch(removeCartItem(id))
		} else {
			dispatch(decrementCartItem(id))
		}
	}

	const removeCartItemHandler = (id) => {
		dispatch(removeCartItem(id))
	}

	const sendOrder = () => {
		dispatch(addOrder(cart))
		dispatch(clearCart())
	}

	return (
		<div
			className='modal fade'
			id='cart'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
			data-bs-backdrop='static'>
			<div className='modal-dialog modal-dialog-centered modal-xl'>
				<div className='modal-content'>
					<div className='modal-header bg-secondary'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Корзина
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body text-secondary'>
						{cart.length ? (
							<>
								{cart.map((item) => (
									<div key={item._id} className='row mb-2'>
										<div className='col-4'>
											<img
												src={item.image}
												className='cart-image d-block mx-auto'
												alt=''
											/>
										</div>

										<div className='text-secondary col-5'>
											<p className='text-secondary'>
												{item.name}
											</p>
											<p className='text-secondary'>
												{item.description}
											</p>
										</div>

										<div className='text-secondary col-3 fw-bold text-end'>
											Цена: {item.cost} руб.
										</div>
										<div className='text-secondary fs-5 col-4 mt-1 d-flex justify-content-center'>
											<button
												className='btn btn-secondary btn-sm me-2'
												onClick={() =>
													decrementCartItemHandler(
														item._id,
													)
												}>
												-
											</button>
											{item.count}
											<button
												className='btn btn-secondary btn-sm ms-2'
												onClick={() =>
													incrementCartItemHandler(
														item._id,
													)
												}>
												+
											</button>
										</div>
										<div className='text-secondary offset-2 col-6 d-flex justify-content-end'>
											<button
												className='btn btn-danger'
												onClick={() =>
													removeCartItemHandler(
														item._id,
													)
												}>
												Удалить
											</button>
										</div>
										<hr className='bg-secondary my-2' />
									</div>
								))}

								<div className='row'>
									<p className='text-secondary text-uppercase fw-bold fs-5'>
										Общая сумма: {getCartCost()} руб.
									</p>
								</div>
							</>
						) : (
							<p className='text-secondary text-center'>
								Товары еще не добавлены
							</p>
						)}
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={clearCartHandler}>
							Очистить корзину
						</button>
						<button
							type='button'
							className='btn btn-success'
							onClick={sendOrder}
							disabled={!Boolean(cart.length)}
							data-bs-dismiss='modal'>
							Сделать заказ
						</button>
						<button
							type='button'
							className='btn btn-danger'
							data-bs-dismiss='modal'>
							Закрыть
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
