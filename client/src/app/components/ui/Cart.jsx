import React from 'react'

const Cart = () => {
    const cart = []

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
                        {cart.length > 0 ? (
                            <p className='text-primary'>Товары есть</p>
                        ) : (
                            <p className='text-secondary text-center'>
                                Товары еще не добавлены
                            </p>
                        )}
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary'>
                            Очистить корзину
                        </button>
                        <button type='button' className='btn btn-success'>
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
