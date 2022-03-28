import React from 'react'

const SortBar = () => {
    return (
        <div className='row'>
            <div className='col-6'>
                <button
                    className='btn btn-secondary w-100 shadow'
                    data-name='cost'>
                    Цена
                    <i className='bi-caret-up-fill ms-2 text-light' />
                </button>
            </div>
            <div className='col-6'>
                <button
                    className='btn btn-secondary w-100 shadow'
                    data-name='name'>
                    Наименование{' '}
                    <i className='bi bi-caret-up-fill ms-2 text-light' />
                </button>
            </div>
        </div>
    )
}

export default SortBar
