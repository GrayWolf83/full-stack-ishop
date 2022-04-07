import React from 'react'

const ProductItem = ({ item, clickHandler }) => {
    return (
        <div className='col'>
            <div className='card shadow'>
                <img src={item.image} className='card-img' alt='...' />
                <div className='card-body py-1'>
                    <h5 className='card-title mb-0'>{item.name}</h5>
                    <p className='card-text mb-0'>Модель: {item.description}</p>
                    <p className='card-text text-secondary'>
                        Цена: {item.cost} ₽
                    </p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <button className='btn btn-secondary'>Подробнее</button>
                    <button
                        className='btn btn-secondary'
                        onClick={() => clickHandler(item)}>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem