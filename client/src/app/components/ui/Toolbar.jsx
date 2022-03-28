import React from 'react'

const Toolbar = () => {
    return (
        <select className='toolbar w-100 text-light bg-secondary p-2 rounded mb-2 shadow'>
            <option value='all'>Все категории</option>
            <option value='foot'>Футболки</option>
            <option value='comp'>Компьютеры</option>
            <option value='laptop'>Ноутбуки</option>
            <option value='tech'>Бытовая техника</option>
        </select>
    )
}

export default Toolbar
