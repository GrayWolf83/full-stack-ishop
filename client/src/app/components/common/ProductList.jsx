import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addCartItem } from '../../store/cart'
import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
	const dispatch = useDispatch()

	const clickHandler = (item) => {
		dispatch(
			addCartItem({
				...item,
				count: 1,
			}),
		)
		toast.success('Товар добавлен!')
	}

	return (
		<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 ps-2 pe-0'>
			{products.length ? (
				products.map((item) => (
					<ProductItem
						key={item._id}
						item={item}
						clickHandler={clickHandler}
					/>
				))
			) : (
				<p className='text-center'>Нет соответствующих товаров!</p>
			)}
		</div>
	)
}

export default ProductList
