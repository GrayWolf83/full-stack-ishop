import React from 'react'
import { useSelector } from 'react-redux'
import { getCategoriesList } from '../../store/categories'
import SelectField from '../common/form/SelectField'

const Toolbar = ({ onChange }) => {
	const categories = useSelector(getCategoriesList())

	const handleChange = (e) => {
		onChange(e.target.value)
	}

	return (
		<SelectField
			options={categories}
			onChange={handleChange}
			defaultLabel='Все категории'
		/>
	)
}

export default Toolbar
