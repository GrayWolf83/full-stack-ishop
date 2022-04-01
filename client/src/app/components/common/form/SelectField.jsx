import React from 'react'

const SelectField = ({ label, value, onChange, options, error, name }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	const getInputClasses = () => {
		return 'form-select' + (error ? ' is-invalid' : '')
	}

	const optionsArray =
		!Array.isArray(options) && typeof options === 'object'
			? Object.keys(options).map((optionName) => ({
					name: options[optionName].name,
					value: options[optionName]._id,
			  }))
			: options

	return (
		<div className='mb-4'>
			<label htmlFor={name} className='form-label'>
				{label}
			</label>
			<select
				className={getInputClasses()}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}>
				<option>Выбрать...</option>
				{optionsArray &&
					optionsArray.map((option) => (
						<option value={option.value} key={option.value}>
							{option.label}
						</option>
					))}
			</select>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	)
}

export default SelectField
