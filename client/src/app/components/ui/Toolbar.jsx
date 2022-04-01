import React from 'react'
import { useSelector } from 'react-redux'
import { getCategoriesList } from '../../store/categories'

const Toolbar = ({ onChange }) => {
	const categories = useSelector(getCategoriesList())

	return (
		<select
			className='toolbar w-100 text-light bg-secondary p-2 rounded mb-2 shadow'
			onChange={onChange}>
			{categories?.length ? (
				categories.map((category) => (
					<option value={category._id} key={category._id}>
						{category.name}
					</option>
				))
			) : (
				<option disabled></option>
			)}
		</select>
	)
}

export default Toolbar
