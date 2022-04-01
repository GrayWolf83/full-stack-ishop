import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../store/cart'

const ProductList = () => {
	const dispatch = useDispatch()
	const products = [
		{
			_id: '1',
			name: 'Моноблок мультимедийный',
			description: 'Модель: ACER Aspire C27-962 (DQ.BDQMC.002)',
			image: 'https://www.mechta.kz/export/1cbitrix/import_files/a5/a5fa364d-c5d4-11ea-a230-005056b6dbd7-768.webp',
			cost: 65000,
			category: '62418495a72364dce36b8f81',
			manageId: '624305d7e5bac485ccf1aa3b',
		},
		{
			_id: '2',
			name: 'Ноутбук',
			description: 'Модель: HUAWEI MateBook D 14 (NbB-WAH9)',
			image: 'https://www.mechta.kz/export/1cbitrix/import_files/b8/b87a95c3-8568-11ec-a244-005056b6dbd7-768.webp',
			cost: 65000,
			category: '62418495a72364dce36b8f82',
			manageId: '624305d7e5bac485ccf1aa3b',
		},
		{
			_id: '3',
			name: 'Телефон сотовый',
			description: 'Модель: APPLE iPhone 12 128GB (Black)',
			image: 'https://www.mechta.kz/export/1cbitrix/import_files/ac/ac142efc-0df3-11eb-a235-005056b6dbd7-768.webp',
			cost: 100000,
			category: '62418495a72364dce36b8f85',
			manageId: '624305d7e5bac485ccf1aa3b',
		},
	]

	const clickHandler = (item) => {
		dispatch(
			addCartItem({
				...item,
				count: 1,
			}),
		)
	}

	return (
		<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 ps-2 pe-0'>
			{products.length ? (
				products.map((item) => (
					<div className='col' key={item._id}>
						<div className='card shadow'>
							<img
								src={item.image}
								className='card-img'
								alt='...'
							/>
							<div className='card-body'>
								<h5 className='card-title'>{item.name}</h5>
								<p className='card-text'>
									Модель: {item.description}
								</p>
								<p className='card-text text-secondary'>
									Цена: {item.cost} ₽
								</p>
							</div>
							<div className='card-footer d-flex justify-content-between'>
								<button className='btn btn-secondary'>
									Подробнее
								</button>
								<button
									className='btn btn-secondary'
									onClick={() => clickHandler(item)}>
									В корзину
								</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p className='text-center'>Товары еще не добавлены!</p>
			)}
		</div>
	)
}

export default ProductList
